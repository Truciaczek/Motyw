// Use the edited atlas only where the native CSS already uses buttony.png.
// In particular, never apply it to a standalone pointer/label image.
function bindTruciakBottomAtlas(doc, view) {
    const marked=new Map();let observer=null,queued=false,stopped=false;
    function scan(){
        if(stopped || typeof doc.querySelectorAll!=='function' || typeof view.getComputedStyle!=='function')return;
        const elements=new Set();
        for(const root of doc.querySelectorAll('.bottom-panel,.bottom-panel-pointer-bg')){
            elements.add(root);for(const child of root.querySelectorAll('*'))elements.add(child);
        }
        for(const element of elements){
            for(const [part,pseudo] of [['base',null],['before','::before'],['after','::after']]){
                const attribute='data-truciak-bottom-atlas-'+part;
                if(element.hasAttribute(attribute))continue;
                const image=view.getComputedStyle(element,pseudo).backgroundImage || '';
                // Single native sprite layer only. Its offsets, size, repeat and
                // positioning remain entirely under game control.
                if(!/^url\(["']?(?:https?:\/\/[^/]+)?[^"')]*\/buttony\.png(?:\?[^"')]*)?["']?\)$/.test(image))continue;
                if(!marked.has(element))marked.set(element,[]);
                marked.get(element).push(attribute);element.setAttribute(attribute,'true');
            }
        }
    }
    scan();
    if(typeof view.MutationObserver==='function' && doc.body){
        observer=new view.MutationObserver(records=>{
            if(queued || !records.some(r=>[...r.addedNodes,...r.removedNodes].some(n=>n.nodeType===1)))return;
            queued=true;view.queueMicrotask(()=>{queued=false;scan();});
        });
        observer.observe(doc.body,{subtree:true,childList:true});
    }
    return {count:()=>[...marked.values()].reduce((n,a)=>n+a.length,0),cleanup(){
        stopped=true;observer?.disconnect();
        for(const [element,attributes] of marked)for(const attribute of attributes)element.removeAttribute(attribute);
        marked.clear();
    }};
}
