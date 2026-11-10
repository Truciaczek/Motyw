const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const context={};vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/../tools/bottom-atlas.js','utf8'),context);
function node(images,children=[]){const attributes=new Map();return {images,attributes,querySelectorAll:()=>children,hasAttribute:k=>attributes.has(k),setAttribute:(k,v)=>attributes.set(k,v),removeAttribute:k=>attributes.delete(k)};}
const atlas='url("https://lelwani.margonem.pl/img/gui/buttony.png?v=9ba6b5fe1722a")';
const exp=node({base:atlas}),pointer=node({base:'url("https://lelwani.margonem.pl/img/gui/pointer.png")'}),blood=node({base:'url("https://lelwani.margonem.pl/img/gui/krew-klatki.png")'});
const root=node({base:atlas,before:atlas,after:'none'},[exp,pointer,blood]);
const binding=context.bindTruciakBottomAtlas({querySelectorAll:()=>[root,pointer]}, {getComputedStyle:(e,p)=>({backgroundImage:e.images[p?.slice(2)||'base']||'none'})});
assert.equal(binding.count(),3);assert.equal(pointer.attributes.size,0);assert.equal(blood.attributes.size,0);
assert.ok(root.attributes.has('data-truciak-bottom-atlas-base'));assert.ok(root.attributes.has('data-truciak-bottom-atlas-before'));
assert.ok(exp.attributes.has('data-truciak-bottom-atlas-base'));
assert.equal(root.images.base,atlas,'Only URL marker is introduced; original CSS data untouched');
binding.cleanup();assert.equal(binding.count(),0);assert.equal(root.attributes.size,0);assert.equal(exp.attributes.size,0);
console.log('PASS: native buttony atlas only, base/pseudo layers, standalone pointers/blood untouched, no geometry changes and full cleanup');
