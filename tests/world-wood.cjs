const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const context={URL,console};vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/../tools/world-wood.js','utf8'),context);
(async()=>{
 const images=[],styles=[],written=[];
 const doc={head:{appendChild:s=>styles.push(s)},querySelector:()=>null,createElement:tag=>tag==='style'?{textContent:'',remove(){this.removed=true;}}:{getContext:()=>({drawImage(){},getImageData:()=>({data:new Uint8ClampedArray([46,50,50,255,151,161,165,255,255,255,255,0,0,0,0,255,20,20,20,255,49,53,53,255])}),putImageData:p=>written.push([...p.data])}),toDataURL:()=> 'data:image/png;base64,AAA='}};
 const view={location:{href:'https://game.example/',origin:'https://game.example'},Image:class{constructor(){images.push(this);this.naturalWidth=160;this.naturalHeight=64;}}};
 const binding=context.bindTruciakWorldWood(doc,view,'<filter id="truciak-window-wood" data-test="wood"/>','<filter id="truciak-window-wood" data-test="frame"/>');
 assert.equal(images.length,5,'one load per shared file, even with no windows open');
 for(const i of images)i.onload();await Promise.resolve();await Promise.resolve();
 const css=styles[0].textContent;
 for(const selector of ['.border-window:not(.transparent):not(.tip-window) .header-label .left-decor','.border-window:not(.transparent):not(.tip-window) .header-label .right-decor','.border-window:not(.transparent)','.additional-skill-panel .graphics .additional-skill-panel-border','.battle-controller .graphics .battle-border','.interface-element-vertical-wood','.interface-element-middle-4-background','.interface-element-bottom-bar-background','.interface-element-bottom-bar-background-stretch','.interface-element-header-1-background-stretch'])assert.ok(css.includes('html[data-truciak-theme="ebony"] '+selector),selector);
 assert.ok(!css.includes('.world-window'),'not restricted to World');
 assert.ok(!css.includes(',html[data-truciak-theme="ebony"] .border-window{'),'transparent frames must not receive ordinary window sprite');
 assert.ok(!css.includes('border-image-slice'),'original slicing preserved');
 const decoded=decodeURIComponent(css);assert.ok(decoded.includes('viewBox="0 0 160 64"'));assert.ok(decoded.includes('data:image/png;base64,AAA='));assert.equal((decoded.match(/data-test="frame"/g)||[]).length,2,'ornament palette applied to window frame and title decorations');
 assert.deepEqual(written[0].slice(0,4),[23,27,32,255],'title fill maps exactly to #171B20');assert.notDeepEqual(written[0].slice(4,7),[151,161,165],'silver trim recolored');assert.equal(written[0][7],255);assert.equal(written[0][11],0,'transparency preserved');assert.ok(css.includes('background-color:#171B20!important'));assert.ok(css.includes('background-size:1px 28px'));assert.ok(css.includes('box-shadow:none'));assert.deepEqual(written[0].slice(12,16),[0,0,0,255],'black shadow stays black');assert.ok(Math.max(...written[0].slice(16,19))<25,'dark shadow cannot become a light outline');assert.deepEqual(written[1].slice(12,16),[0,0,0,255],'shared window frame shadow stays black');assert.deepEqual(written[0].slice(20,24),[23,27,32,255],'near-fill edge shades cannot become a bright rim');binding.cleanup();assert.ok(styles[0].removed);
 const late=context.bindTruciakWorldWood(doc,view,'');late.cleanup();for(const i of images.slice(5))i.onload();await Promise.resolve();assert.equal(styles[1].textContent,'');
 console.log('PASS: shared NI resource replacement, five cached files, all native consumers, closed/future windows, native geometry, cleanup and late-load guard');
})();

{
 const width=64,height=80,pixels={data:new Uint8ClampedArray(width*height*4)};
 const set=(x,y,color)=>pixels.data.set(color,(y*width+x)*4);
 set(30,27,[90,55,30,255]);set(30,28,[0,0,0,255]);set(30,29,[0,0,0,255]);set(30,30,[0,0,0,255]);
 set(31,27,[90,55,30,255]);set(31,28,[180,190,200,255]);set(10,27,[90,55,30,255]);
 context.extendTruciakFrameWood(pixels,width,height);
 const at=(x,y)=>[...pixels.data.slice((y*width+x)*4,(y*width+x)*4+4)];
 assert.deepEqual(at(30,28),[90,55,30,255]);assert.deepEqual(at(30,29),[90,55,30,255]);assert.deepEqual(at(30,30),[0,0,0,255]);
 assert.deepEqual(at(31,28),[180,190,200,255]);assert.deepEqual(at(10,28),[0,0,0,0]);
 console.log('PASS: top wood extends exactly 2 pixels into dark seam; metal, corners and remaining rows unchanged');
}

{
 const width=64,height=80,pixels={data:new Uint8ClampedArray(width*height*4)};
 const set=(y,color)=>pixels.data.set(color,(y*width+30)*4);
 set(24,[60,35,20,255]);set(25,[70,40,23,255]);set(26,[80,48,27,255]);set(27,[90,55,30,255]);
 context.extendTruciakFrameWood(pixels,width,height);
 const red=y=>pixels.data[(y*width+30)*4];
 assert.deepEqual([red(24),red(25),red(26),red(27),red(28),red(29)],[60,66,72,78,84,90]);
 console.log('PASS: continuous grain interpolation across old edge and 2px extension, no flat duplicated seam');
}
