// Same 5 px launcher gap and 8 px viewport margin as Firuś.
function truciakMenuGeometry(anchor, width, viewport, corner = '') {
    const margin=8, gap=5;
    const onLeft=corner ? corner.endsWith('left') : (anchor.left+anchor.width/2 < viewport.width/2);
    const upwards=corner ? corner.startsWith('bottom') : (anchor.top+anchor.height/2 >= viewport.height/2);
    const desiredLeft=onLeft ? anchor.left : anchor.right-width;
    const left=Math.max(margin,Math.min(desiredLeft,viewport.width-width-margin));
    const available=upwards ? anchor.top-gap-margin : viewport.height-anchor.bottom-gap-margin;
    return {left:(left-anchor.left)+'px',right:'auto',maxHeight:Math.max(0,available)+'px',
        top:upwards?'auto':(anchor.height+gap)+'px',bottom:upwards?(anchor.height+gap)+'px':'auto'};
}
function placeTruciakMenu(panel, anchor, tile) {
    const container=tile?.closest?.('.main-buttons-container');
    const corner=['top-left','top-right','bottom-left','bottom-right'].find(c=>container?.classList?.contains(c)) || '';
    Object.assign(panel.style,truciakMenuGeometry(anchor,panel.offsetWidth,{width:window.innerWidth,height:window.innerHeight},corner));
}
