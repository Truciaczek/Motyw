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
