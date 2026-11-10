// Recolor native image resources, not their containing windows or children.
function bindTruciakWorldWood(doc, view, filterDefinition) {
    const changed=new Map(),cache=new Map();let stopped=false,observer=null,queued=false;
    const imageUrl=value=>value?.match(/^url\(["']?(.*?)["']?\)$/)?.[1];
    function recolor(url){
        if(cache.has(url))return cache.get(url);
        const result=new Promise(resolve=>{
            const image=new view.Image();
            image.onload=()=>{
                if(stopped){resolve(null);return;}
                try{
                    const canvas=doc.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;
                    const context=canvas.getContext('2d');context.drawImage(image,0,0);
                    const png=canvas.toDataURL('image/png');
                    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+canvas.width+'" height="'+canvas.height+'" viewBox="0 0 '+canvas.width+' '+canvas.height+'"><defs>'+filterDefinition+'</defs><image width="100%" height="100%" href="'+png+'" filter="url(#truciak-window-wood)"/></svg>';
                    resolve('url("data:image/svg+xml,'+encodeURIComponent(svg)+'")');
                }catch(error){console.warn('[Truciak] Drewno okna Świat:',error);resolve(null);}
            };
            image.onerror=()=>resolve(null);
            try{if(new URL(url,view.location.href).origin!==view.location.origin)image.crossOrigin='anonymous';}catch{}
            image.src=url;
        });
        cache.set(url,result);return result;
    }
    function apply(element,property){
        const token=property;
        if(!changed.has(element))changed.set(element,new Map());
        const properties=changed.get(element);if(properties.has(token))return;
        const native=view.getComputedStyle(element).getPropertyValue(property);
        const url=imageUrl(native);if(!url || url.startsWith('data:'))return;
        properties.set(token,{value:element.style.getPropertyValue(property),priority:element.style.getPropertyPriority(property)});
        recolor(url).then(value=>{if(!stopped&&value)element.style.setProperty(property,value,'important');});
    }
    function scan(){
        if(stopped || typeof view.Image!=='function' || typeof doc.querySelectorAll!=='function' || typeof view.getComputedStyle!=='function')return;
        for(const world of doc.querySelectorAll('.world-window')){
            const frame=world.closest('.border-window') || world;
            apply(frame,'border-image-source');
            for(const node of frame.querySelectorAll('.bottom-bar,.world-window__bg')){
                apply(node,'border-image-source');apply(node,'background-image');
            }
        }
    }
    scan();
    if(typeof view.MutationObserver==='function' && doc.body){
        observer=new view.MutationObserver(records=>{
            if(queued || !records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1)))return;
            queued=true;view.queueMicrotask(()=>{queued=false;scan();});
        });observer.observe(doc.body,{childList:true,subtree:true});
    }
    return {cleanup(){
        stopped=true;observer?.disconnect();
        for(const [node,properties] of changed)for(const [property,old] of properties){
            if(old.value)node.style.setProperty(property,old.value,old.priority);else node.style.removeProperty(property);
        }
        changed.clear();
    }};
}
