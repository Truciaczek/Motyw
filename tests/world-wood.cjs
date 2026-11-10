const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const context={URL,console};vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/../tools/world-wood.js','utf8'),context);
(async()=>{
 const images=[],styles=[];
 const doc={head:{appendChild:s=>styles.push(s)},querySelector:()=>null,createElement:tag=>tag==='style'?{textContent:'',remove(){this.removed=true;}}:{getContext:()=>({drawImage(){}}),toDataURL:()=> 'data:image/png;base64,AAA='}};
 const view={location:{href:'https://game.example/',origin:'https://game.example'},Image:class{constructor(){images.push(this);this.naturalWidth=128;this.naturalHeight=64;}}};
 const binding=context.bindTruciakWorldWood(doc,view,'<filter id="truciak-window-wood"/>');
 assert.equal(images.length,3,'one load per shared file, even with no windows open');
 for(const i of images)i.onload();await Promise.resolve();await Promise.resolve();
 const css=styles[0].textContent;
 for(const selector of ['.border-window','.additional-skill-panel .graphics .additional-skill-panel-border','.battle-controller .graphics .battle-border','.interface-element-vertical-wood','.interface-element-middle-4-background','.interface-element-bottom-bar-background','.interface-element-bottom-bar-background-stretch'])assert.ok(css.includes('html[data-truciak-theme="ebony"] '+selector),selector);
 assert.ok(!css.includes('.world-window'),'not restricted to World');
 assert.ok(!css.includes('border-image-slice'),'original slicing preserved');
 const decoded=decodeURIComponent(css);assert.ok(decoded.includes('viewBox="0 0 128 64"'));assert.ok(decoded.includes('data:image/png;base64,AAA='));
 binding.cleanup();assert.ok(styles[0].removed);
 const late=context.bindTruciakWorldWood(doc,view,'');late.cleanup();for(const i of images.slice(3))i.onload();await Promise.resolve();assert.equal(styles[1].textContent,'');
 console.log('PASS: shared NI resource replacement, three cached files, all native consumers, closed/future windows, native geometry, cleanup and late-load guard');
})();
