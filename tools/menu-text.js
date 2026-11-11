// Map neutral menu text by luminance: white -> #12C9BD, grays -> darker turquoise.
function bindTruciakMenuText(doc,view){
    if(typeof doc.querySelectorAll!=='function' || typeof view.getComputedStyle!=='function')return {cleanup(){}};
    const roots='.border-window .content,.border-window:not(.tip-window) .header-label,.world-window,.tabs-nav,.cards-header-wrapper,.friend-enemy-list';
    const attribute='data-truciak-menu-tone',marked=new Map();
    const style=doc.createElement('style');style.id='truciak-menu-text';
    (doc.head || doc.documentElement).appendChild(style);
    let stopped=false,frame=null;
    function scan(){
        frame=null;if(stopped)return;
        // Measure native/current-theme colors without reading our previous tint.
        if(style.sheet)style.sheet.disabled=true;
        const rules=[],colors=new Map(),elements=new Set();
        for(const root of doc.querySelectorAll(roots)){
            elements.add(root);for(const el of root.querySelectorAll('*'))elements.add(el);
        }
        const wanted=new Map();
        for(const el of elements){
            if(![...el.childNodes].some(n=>n.nodeType===3 && n.textContent.trim()))continue;
            // Keep colored actions, item rarity and semantic messages under native control.
            if(el.closest('.button,.widget-button,.btn-min,.popup-menu,.tip-wrapper,script,style,svg'))continue;
            const match=view.getComputedStyle(el).color.match(/^rgba?\(([^)]+)\)$/);
            if(!match)continue;
            const values=match[1].split(/[,\s/]+/).filter(Boolean).map(Number);
            const [r,g,b]=values,alpha=values[3]??1;
            if(![r,g,b,alpha].every(Number.isFinite))continue;
            // Native window titles and Social text also use pale beige.
            const titleBeige=(el.closest('.header-label') || el.closest('.friend-enemy-list')) && r>=g && g>=b && r-b<=80 && b>=100;
            if(Math.max(r,g,b)-Math.min(r,g,b)>28 && !titleBeige)continue;
            const gain=(.2126*r+.7152*g+.0722*b)/255;
            const color='rgba('+[18,201,189].map(c=>Math.round(c*gain)).join(',')+','+alpha+')';
            if(!colors.has(color))colors.set(color,'tone-'+colors.size);
            wanted.set(el,colors.get(color));
        }
        for(const [el,old] of marked)if(!wanted.has(el)){
            if(old===null)el.removeAttribute(attribute);else el.setAttribute(attribute,old);
            marked.delete(el);
        }
        for(const [el,id] of wanted){
            if(!marked.has(el))marked.set(el,el.getAttribute(attribute));
            if(el.getAttribute(attribute)!==id)el.setAttribute(attribute,id);
        }
        for(const [color,id] of colors)rules.push('html[data-truciak-theme="ebony"] ['+attribute+'="'+id+'"]{color:'+color+'!important;}');
        const css=rules.join('\n');if(style.textContent!==css)style.textContent=css;
        if(style.sheet)style.sheet.disabled=false;
    }
    function schedule(){if(!stopped && frame===null)frame=view.requestAnimationFrame(scan);}
    scan();
    const observer=typeof view.MutationObserver==='function'?new view.MutationObserver(records=>{
        if(records.some(r=>r.target!==style && !style.contains(r.target) && (r.target.nodeType===1?r.target:r.target.parentElement)?.closest?.(roots)))schedule();
    }):null;
    if(doc.body)observer?.observe(doc.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','disabled','aria-disabled','style']});
    doc.addEventListener('pointerover',schedule);doc.addEventListener('pointerout',schedule);
    return {cleanup(){stopped=true;observer?.disconnect();if(frame!==null)view.cancelAnimationFrame(frame);
        doc.removeEventListener('pointerover',schedule);doc.removeEventListener('pointerout',schedule);style.remove();
        for(const [el,old] of marked){if(old===null)el.removeAttribute(attribute);else el.setAttribute(attribute,old);}marked.clear();
    }};
}
