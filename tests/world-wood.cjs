const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const context={URL,console};vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/../tools/world-wood.js','utf8'),context);
function node(native){const values=new Map();return {native,values,style:{getPropertyValue:p=>values.get(p)?.[0]||'',getPropertyPriority:p=>values.get(p)?.[1]||'',setProperty:(p,v,k)=>values.set(p,[v,k]),removeProperty:p=>values.delete(p)}};}
(async()=>{
const url='url("https://game.example/frame.png")',frame=node({'border-image-source':url}),bottom=node({'background-image':url}),images=[];
frame.querySelectorAll=()=>[bottom];const world={closest:()=>frame};
const doc={querySelectorAll:()=>[world],createElement:()=>({getContext:()=>({drawImage(){}}),toDataURL:()=> 'data:image/png;base64,AAA='})};
const view={location:{href:'https://game.example/',origin:'https://game.example'},getComputedStyle:e=>({getPropertyValue:p=>e.native[p]||'none'}),Image:class{constructor(){images.push(this);this.naturalWidth=128;this.naturalHeight=64;}}};
const binding=context.bindTruciakWorldWood(doc,view,'<filter id="truciak-window-wood"/>');
assert.equal(images.length,1,'same resource cached across decorative layers');images[0].onload();await Promise.resolve();await Promise.resolve();
assert.equal(frame.values.size,1);assert.equal(bottom.values.size,1);
const svg=decodeURIComponent(frame.values.get('border-image-source')[0]);assert.ok(svg.includes('viewBox="0 0 128 64"'));assert.ok(svg.includes('data:image/png;base64,AAA='));assert.ok(svg.includes('filter="url(#truciak-window-wood)"'));
assert.ok(!frame.values.has('filter'),'no filtering window contents');assert.ok(!frame.values.has('border-image-slice'),'native geometry preserved');binding.cleanup();assert.equal(frame.values.size,0);assert.equal(bottom.values.size,0);
const late=context.bindTruciakWorldWood(doc,view,'');late.cleanup();images[1].onload();await Promise.resolve();assert.equal(frame.values.size,0,'late load cannot restore disabled theme');
console.log('PASS: decorative images only, shared resource cache, exact source dimensions, untouched geometry, cleanup and late-load guard');
})();
