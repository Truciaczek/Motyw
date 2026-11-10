// Recolor native image resources, not their containing windows or children.
function bindTruciakWorldWood(doc, view, filterDefinition, frameFilterDefinition=filterDefinition) {
    const cache=new Map();let stopped=false;
    const imageUrl=value=>value?.match(/^url\(["']?(.*?)["']?\)$/)?.[1];
    function recolor(url,definition){
        const key=url+definition;
        if(cache.has(key))return cache.get(key);
        const result=new Promise(resolve=>{
            const image=new view.Image();
            image.onload=()=>{
                if(stopped){resolve(null);return;}
                try{
                    const canvas=doc.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;
                    const context=canvas.getContext('2d');context.drawImage(image,0,0);
                    const png=canvas.toDataURL('image/png');
                    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+canvas.width+'" height="'+canvas.height+'" viewBox="0 0 '+canvas.width+' '+canvas.height+'"><defs>'+definition+'</defs><image width="100%" height="100%" href="'+png+'" filter="url(#truciak-window-wood)"/></svg>';
                    resolve('url("data:image/svg+xml,'+encodeURIComponent(svg)+'")');
                }catch(error){console.warn('[Truciak] Wspólne drewno NI:',error);resolve(null);}
            };
            image.onerror=()=>resolve(null);
            try{if(new URL(url,view.location.href).origin!==view.location.origin)image.crossOrigin='anonymous';}catch{}
            image.src=url;
        });
        cache.set(key,result);return result;
    }
    // These are all consumers of the shared resources in the native NI stylesheet.
    const resources=[
        {path:'/img/gui/dialogue/dialogi.png',ornament:true,property:'background-image',selectors:'.border-window .left-decor,.border-window .right-decor'},
        {path:'/img/gui/window-frame.png',property:'border-image-source',selectors:'.interface-element-border-window-frame,.additional-skill-panel .graphics .additional-skill-panel-border,.battle-controller .graphics .battle-border,.border-window'},
        {path:'/img/gui/middle_graphics.png',property:'background-image',selectors:'.interface-element-vertical-wood'},
        {path:'/img/gui/middle_graphics.png',property:'border-image-source',selectors:'.interface-element-middle-1-background,.interface-element-middle-1-background-stretch,.interface-element-middle-2-background,.interface-element-middle-2-background-stretch,.interface-element-middle-3-background,.interface-element-middle-3-background-stretch,.interface-element-middle-4-background'},
        {path:'/img/gui/quests/quest_bar.png',property:'border-image-source',selectors:'.interface-element-bottom-bar-background,.interface-element-bottom-bar-background-stretch'}
    ];
    let style=null;
    if(typeof view.Image==='function' && typeof doc.createElement==='function'){
        style=doc.createElement('style');
        style.id='truciak-shared-wood';
        (doc.head || doc.documentElement).appendChild(style);
        const sources=new Map();
        // Prefer the game's current versioned URL; fall back when its window is closed.
        for(const resource of resources){
            const element=doc.querySelector?.(resource.selectors);
            const native=element && view.getComputedStyle?.(element).getPropertyValue(resource.property);
            const url=imageUrl(native);
            if(url && new URL(url,view.location.href).pathname===resource.path)sources.set(resource.path,url);
        }
        const rules=new Array(resources.length).fill('');
        resources.forEach((resource,index)=>{
            const url=sources.get(resource.path) || new URL(resource.path,view.location.href).href;
            recolor(url,(resource.ornament || resource.path==='/img/gui/window-frame.png')?frameFilterDefinition:filterDefinition).then(value=>{
                if(stopped || !value)return;
                const selectors=resource.selectors.split(',').map(selector=>'html[data-truciak-theme="ebony"] '+selector).join(',');
                rules[index]=selectors+'{'+resource.property+':'+value+'!important;}';
                style.textContent=rules.join('\n');
            });
        });
    }
    return {cleanup(){stopped=true;style?.remove();}};
}
