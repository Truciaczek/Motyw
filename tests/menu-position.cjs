const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const box={};vm.createContext(box);vm.runInContext(fs.readFileSync(__dirname+'/../tools/menu-position.js','utf8'),box);
const viewport={width:1200,height:800},width=300;
for(const corner of ['top-left','top-right','bottom-left','bottom-right']){
 const left=corner.endsWith('left')?20:1136,top=corner.startsWith('top')?20:736;
 const anchor={left,top,right:left+44,bottom:top+44,width:44,height:44};
 const result=box.truciakMenuGeometry(anchor,width,viewport,corner);
 assert.equal(result.left,corner.endsWith('left')?'0px':'-256px');
 assert.equal(result.top,corner.startsWith('top')?'49px':'auto');
 assert.equal(result.bottom,corner.startsWith('bottom')?'49px':'auto');
 assert.equal(result.maxHeight,'723px');
}
const edge=box.truciakMenuGeometry({left:0,top:0,right:44,bottom:44,width:44,height:44},300,viewport,'top-left');assert.equal(edge.left,'8px');
console.log('PASS: all four native corners, same Firus 5px gap / 8px screen margin, menu height and edge clamp');
