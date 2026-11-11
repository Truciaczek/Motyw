// Recolor the native tab-strip border resource, never the cards or their shadows.
function bindTruciakTabFrame(doc,view){
    if(typeof doc.querySelectorAll!=='function' || typeof view.Image!=='function')return {cleanup(){}};
    const attribute='data-truciak-tab-frame',marked=new Map(),cache=new Map();
    let stopped=false;
    const style=doc.createElement('style');style.id='truciak-tab-frame';
    (doc.head || doc.documentElement).appendChild(style);
    function resource(url){
        if(cache.has(url))return cache.get(url);
        const promise=new Promise(resolve=>{
            const image=new view.Image();
            image.onload=()=>{
                if(stopped)return resolve(null);
                try{
                    const canvas=doc.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;
                    const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);
                    const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
                    let peak=0;
                    for(let i=0;i<data.length;i+=4)if(data[i+3])peak=Math.max(peak,.2126*data[i]+.7152*data[i+1]+.0722*data[i+2]);
                    if(!peak)return resolve(null);
                    const functions=[37,43,49].map((c,i)=>'<feFunc'+['R','G','B'][i]+' type="linear" slope="'+c/peak+'"/>').join('');
                    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+canvas.width+'" height="'+canvas.height+'"><defs><filter id="tint" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values=".2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 0 0 0 1 0"/><feComponentTransfer>'+functions+'</feComponentTransfer></filter></defs><image width="100%" height="100%" filter="url(#tint)" href="'+canvas.toDataURL('image/png')+'"/></svg>';
                    resolve('url("data:image/svg+xml,'+encodeURIComponent(svg)+'")');
                }catch(error){console.warn('[Truciak] Ramka zakładek:',error);resolve(null);}
            };
            image.onerror=()=>resolve(null);
            if(new URL(url,view.location.href).origin!==view.location.origin)image.crossOrigin='anonymous';
            image.src=url;
        });
        cache.set(url,promise);return promise;
    }
    function scan(){
        for(const el of doc.querySelectorAll('.tabs-nav')){
            if(marked.has(el))continue;
            const source=view.getComputedStyle(el,'::before').borderImageSource;
            const match=source?.match(/^url\(["']?(.*?)["']?\)$/);
            if(!match)continue;
            let url;try{url=new URL(match[1],view.location.href);if(url.pathname!=='/img/gui/friend-header.png')continue;}catch{continue;}
            resource(url.href).then(value=>{
                if(stopped || !value || marked.has(el))return;
                const id='frame-'+marked.size;
                marked.set(el,{id,previous:el.getAttribute(attribute)});el.setAttribute(attribute,id);
                style.textContent+='html[data-truciak-theme="ebony"] ['+attribute+'="'+id+'"]::before{border-image-source:'+value+'!important;}';
            });
        }
    }
    scan();
    const observer=typeof view.MutationObserver==='function'?new view.MutationObserver(scan):null;
    if(doc.body)observer?.observe(doc.body,{childList:true,subtree:true});
    return {cleanup(){stopped=true;observer?.disconnect();style.remove();
        for(const [el,{id,previous}] of marked)if(el.getAttribute(attribute)===id){
            if(previous===null)el.removeAttribute(attribute);else el.setAttribute(attribute,previous);
        }
        marked.clear();cache.clear();
    }};
}
