// Extend the top wood slice by two source pixels, without resizing its border.
function extendTruciakFrameWood(pixels,width,height){
    if(width<=40 || height<32)return;
    const d=pixels.data;
    for(let x=20;x<width-20;x++){
        let last=-1;
        for(let y=0;y<32;y++){
            const i=(y*width+x)*4;
            if(d[i+3]===255 && d[i]-d[i+2]>=10)last=y;
        }
        if(last<0 || last>29)continue;
        let start=last;
        while(start>Math.max(0,last-3)){
            const i=((start-1)*width+x)*4;
            if(d[i+3]!==255 || d[i]-d[i+2]<10)break;
            start--;
        }
        const samples=[];
        for(let y=start;y<=last;y++){
            const i=(y*width+x)*4;samples.push(Array.from(d.slice(i,i+4)));
        }
        // Resample the existing grain over the enlarged strip instead of
        // repeating a flat last row that creates a visible horizontal seam.
        for(let y=start;y<=last+2;y++){
            const to=(y*width+x)*4;
            if(y>last && d[to+3] && Math.max(d[to],d[to+1],d[to+2])>60)continue;
            const t=(y-start)*(samples.length-1)/(last+2-start);
            const lo=Math.floor(t),hi=Math.min(samples.length-1,lo+1),weight=t-lo;
            for(let c=0;c<4;c++)d[to+c]=Math.round(samples[lo][c]*(1-weight)+samples[hi][c]*weight);
        }
    }
}
// Recolor native image resources, not their containing windows or children.
function bindTruciakWorldWood(doc, view, filterDefinition, frameFilterDefinition=filterDefinition) {
    const cache=new Map();let stopped=false,titleRail=null;
    const imageUrl=value=>value?.match(/^url\(["']?(.*?)["']?\)$/)?.[1];
    function recolor(url,definition,preserveTitleFill=false,preserveFrameShadows=false){
        const key=url+definition+preserveTitleFill+preserveFrameShadows;
        if(cache.has(key))return cache.get(key);
        const result=new Promise(resolve=>{
            const image=new view.Image();
            image.onload=()=>{
                if(stopped){resolve(null);return;}
                try{
                    const canvas=doc.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;
                    const context=canvas.getContext('2d');context.drawImage(image,0,0);
                    if(preserveTitleFill || preserveFrameShadows){
                        const pixels=context.getImageData(0,0,canvas.width,canvas.height);
                        const d=pixels.data;
                        if(preserveFrameShadows)extendTruciakFrameWood(pixels,canvas.width,canvas.height);
                        for(let i=0;i<d.length;i+=4){
                            const r=d[i],g=d[i+1],b=d[i+2];
                            if(!d[i+3])continue;
                            // The original fill includes small antialiasing variations at
                            // its edge. Keep those in the fill, rather than tinting a halo.
                            if(preserveTitleFill && Math.abs(r-46)<=12 && Math.abs(g-50)<=12 && Math.abs(b-50)<=12 && Math.abs((g-r)-4)<=2 && Math.abs(b-g)<=2){
                                d[i]=23;d[i+1]=27;d[i+2]=32;continue;
                            }
                            const y=(.2126*r+.7152*g+.0722*b)/255;
                            const warm=r-b>=10;
                            const slopes=warm?[.55,.57,.60]:[.349020,.435294,.498039];
                            const offsets=warm?[.025,.028,.032]:[.145098,.168627,.192157];
                            // Do not lift native black shadows into a pale halo.
                            // Fade the ornament tint to black in the low luminance range.
                            const shadowGain=preserveFrameShadows && warm?1:Math.min(1,y/.32);
                            for(let c=0;c<3;c++)d[i+c]=Math.round(255*(slopes[c]*y+offsets[c])*shadowGain);
                        }
                        context.putImageData(pixels,0,0);
                        // The left cap ends at atlas x=89; its 28 rows define the
                        // exact continuation across the title, including fill and alpha.
                        if(preserveTitleFill && canvas.width>=143 && canvas.height>=30){
                            const rail=doc.createElement('canvas');rail.width=1;rail.height=28;
                            rail.getContext('2d').drawImage(canvas,89,2,1,28,0,0,1,28);
                            titleRail=rail.toDataURL('image/png');
                        }
                    }
                    const png=canvas.toDataURL('image/png');
                    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+canvas.width+'" height="'+canvas.height+'" viewBox="0 0 '+canvas.width+' '+canvas.height+'"><defs>'+definition+'</defs><image width="100%" height="100%" href="'+png+'" '+((preserveTitleFill || preserveFrameShadows)?'':'filter="url(#truciak-window-wood)"')+'/></svg>';
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
        {path:'/img/gui/dialogue/dialogi.png',ornament:true,property:'background-image',selectors:'.border-window:not(.transparent):not(.tip-window) .header-label .left-decor,.border-window:not(.transparent):not(.tip-window) .header-label .right-decor'},
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
            recolor(url,(resource.ornament || resource.path==='/img/gui/window-frame.png')?frameFilterDefinition:filterDefinition,!!resource.ornament,resource.path==='/img/gui/window-frame.png').then(value=>{
                if(stopped || !value)return;
                const selectors=resource.selectors.split(',').map(selector=>'html[data-truciak-theme="ebony"] '+selector).join(',');
                rules[index]=selectors+'{'+resource.property+':'+value+'!important;}';
                if(resource.ornament && titleRail){
                    const centers=['.interface-element-border-window-header-middle','.trade-window header .h_background .middle','.border-window:not(.transparent):not(.tip-window) .header-label-positioner .header-label'];
                    rules[index]+=centers.map(selector=>'html[data-truciak-theme="ebony"] '+selector).join(',')+
                        '{background-color:#171B20!important;background-image:url("'+titleRail+'")!important;background-repeat:repeat-x!important;background-position:0 0!important;background-size:1px 28px!important;box-shadow:none!important;}';
                }
                style.textContent=rules.join('\n');
            });
        });
    }
    return {cleanup(){stopped=true;style?.remove();}};
}
