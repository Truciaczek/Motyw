const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/../tools/menu-text.js','utf8');
function node(color,text='label'){
 const attrs=new Map();return {color,childNodes:[{nodeType:3,textContent:text}],getAttribute:k=>attrs.get(k)??null,setAttribute:(k,v)=>attrs.set(k,v),removeAttribute:k=>attrs.delete(k),closest:()=>null,attrs};
}
const white=node('rgb(255, 255, 255)'),gray=node('rgba(128, 128, 128, 0.5)'),red=node('rgb(255, 0, 0)'),turquoise=node('rgb(18, 201, 189)');
const title=node('rgb(202, 192, 148)');title.closest=selector=>selector==='.header-label'?{}:null;
const redTitle=node('rgb(255, 0, 0)');redTitle.closest=title.closest;
const elements=[white,gray,red,turquoise,title,redTitle],root={childNodes:[],querySelectorAll:()=>elements,closest:()=>null};
const style={sheet:{disabled:false},textContent:'',contains:()=>false,remove(){this.removed=true;}};
const listeners={};const document={head:{appendChild(){}},body:{},createElement:()=>style,querySelectorAll:()=>[root],addEventListener:(k,f)=>listeners[k]=f,removeEventListener:k=>delete listeners[k]};
let frame;const view={getComputedStyle:el=>({color:el.color}),requestAnimationFrame:f=>(frame=f,1),cancelAnimationFrame:()=>frame=null};
const context={};vm.createContext(context);vm.runInContext(source,context);
const app=context.bindTruciakMenuText(document,view);
assert.ok(style.textContent.includes('rgba(18,201,189,1)'));
assert.ok(style.textContent.includes('rgba(9,101,95,0.5)'));
assert.ok(style.textContent.includes('rgba(13,151,142,1)'));
assert.ok(title.attrs.size>0);assert.equal(redTitle.attrs.size,0);
assert.equal(red.attrs.size,0);assert.equal(turquoise.attrs.size,0);
assert.equal(style.sheet.disabled,false);
white.color='rgb(112, 112, 112)';listeners.pointerover();frame();assert.ok(style.textContent.includes('rgba(8,88,83,1)'));
white.color='rgb(255, 0, 0)';listeners.pointerout();frame();assert.equal(white.attrs.size,0);
app.cleanup();assert.equal(gray.attrs.size,0);assert.ok(style.removed);assert.equal(Object.keys(listeners).length,0);
console.log('PASS: white/gray luminance and alpha mapping, semantic color preservation, state refresh and cleanup');

{
 const input=node('rgb(255, 255, 255)','');input.matches=()=>true;
 input.placeholderColor='rgba(128, 128, 128, 0.6)';
 const sheet={sheet:{disabled:false},textContent:'',contains:()=>false,remove(){}};
 const events={};let pending;
 const search={childNodes:[],querySelectorAll:()=>[input],closest:()=>null};
 const doc={head:{appendChild(){}},body:{},createElement:()=>sheet,querySelectorAll:()=>[search],addEventListener:(k,f)=>events[k]=f,removeEventListener:k=>delete events[k]};
 const win={getComputedStyle:(el,pseudo)=>{
   if(el===input){assert.equal(pseudo,'::placeholder');assert.equal(sheet.sheet.disabled,true);}
   return {color:el.placeholderColor||'rgb(255, 255, 255)'};
 },requestAnimationFrame:f=>(pending=f,1),cancelAnimationFrame(){}};
 const binding=context.bindTruciakMenuText(doc,win);
 assert.ok(sheet.textContent.includes('::placeholder{color:rgba(9,101,95,0.6)!important;}'));
 assert.ok(!sheet.textContent.includes('opacity:'));
 input.placeholderColor='rgb(255, 255, 255)';events.pointerover();pending();
 assert.ok(sheet.textContent.includes('::placeholder{color:rgba(18,201,189,1)!important;}'));
 binding.cleanup();assert.equal(input.attrs.size,0);
 console.log('PASS: search placeholder without text nodes, native color read without tint, alpha and opacity preserved, refresh and cleanup');
}

{
 const bg=node('');bg.background='rgb(0, 0, 0)';bg.opacity='1';
 const timer=node('');timer.background='rgba(128, 128, 128, 0.48)';timer.opacity='0.6';timer.matches=()=>true;
 const sheet={sheet:{disabled:false},textContent:'',contains:()=>false,remove(){this.removed=true;}};
 const events={};let pending;
 const doc={head:{appendChild(){}},body:{},createElement:()=>sheet,querySelectorAll:()=>[bg,timer],addEventListener:(k,f)=>events[k]=f,removeEventListener:k=>delete events[k]};
 const win={getComputedStyle:el=>({backgroundColor:el.background,opacity:el.opacity}),requestAnimationFrame:f=>(pending=f,1),cancelAnimationFrame:()=>pending=null};
 const binding=context.bindTruciakTransparentWindows(doc,win);
 assert.ok(sheet.textContent.includes('rgba(23,27,32,1)'));assert.ok(!sheet.textContent.includes('opacity:'));
 assert.ok(sheet.textContent.includes('rgba(102,130,152,0.48)'));
 for(const alpha of [0,0.2,0.7,1]){
   timer.background='rgba(128, 128, 128, '+alpha+')';events.click();pending();
   assert.ok(sheet.textContent.includes('rgba(102,130,152,'+alpha+')'));
   assert.equal(timer.opacity,'0.6');
 }
 bg.background='rgba(0, 0, 0, 0.7)';bg.opacity='0';events.click();pending();
 assert.ok(sheet.textContent.includes('rgba(23,27,32,0.7)'));assert.equal(bg.opacity,'0');
 bg.opacity='0.4';events.click();pending();assert.equal(bg.opacity,'0.4');assert.equal(sheet.sheet.disabled,false);
 binding.cleanup();assert.equal(bg.attrs.size,0);assert.equal(timer.attrs.size,0);assert.ok(sheet.removed);assert.equal(Object.keys(events).length,0);
 console.log('PASS: native backdrop alpha tracked across clicks, game opacity preserved, cleanup restores attributes');
}
