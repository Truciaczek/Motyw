// Replace only native search.png consumers. Preserve border slices, alpha and layout.
function bindTruciakSearchBackground(doc,view,sprite){
    const saved=new Map();
    const value='url("'+sprite+'")';
    function scan(){
        if(typeof doc.querySelectorAll!=='function' || typeof view.getComputedStyle!=='function')return;
        for(const el of doc.querySelectorAll('.search-wrapper')){
            if(saved.has(el))continue;
            const source=view.getComputedStyle(el).borderImageSource;
            const match=source?.match(/^url\(["']?(.*?)["']?\)$/);
            if(!match)continue;
            let path;try{path=new URL(match[1],view.location.href).pathname;}catch{continue;}
            if(path!=='/img/gui/search.png')continue;
            saved.set(el,{value:el.style.getPropertyValue('border-image-source'),priority:el.style.getPropertyPriority('border-image-source')});
            el.style.setProperty('border-image-source',value,'important');
        }
    }
    scan();
    const observer=typeof view.MutationObserver==='function'?new view.MutationObserver(scan):null;
    if(doc.body)observer?.observe(doc.body,{childList:true,subtree:true});
    return {cleanup(){
        observer?.disconnect();
        for(const [el,old] of saved){
            if(el.style.getPropertyValue('border-image-source')!==value)continue;
            if(old.value)el.style.setProperty('border-image-source',old.value,old.priority);
            else el.style.removeProperty('border-image-source');
        }
        saved.clear();
    }};
}
