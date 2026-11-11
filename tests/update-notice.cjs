const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/../tools/update-notice.js','utf8').replace('__TRUCIAK_CURRENT_VERSION__','0.1.46');
function fixture(store={}){
 const listeners={},requests=[],nodes=[],timers=[];let aborted=false;
 function element(){const map={};return {attachShadow(){return this.root={querySelector:s=>map[s]??= {}};},remove(){const i=nodes.indexOf(this);if(i>=0)nodes.splice(i,1);}};}
 const document={readyState:'loading',body:{appendChild:n=>nodes.push(n)},createElement:element,addEventListener:(k,f)=>listeners[k]=f};
 const window={setInterval:f=>(timers.push(f),1),clearInterval(){},addEventListener:(k,f)=>listeners[k]=f};
 vm.runInNewContext(source,{document,window,Date,GM_getValue:(k,d)=>store[k]??d,GM_setValue:(k,v)=>store[k]=v,GM_xmlhttpRequest:r=>(requests.push(r),{abort(){aborted=true;}})});
 assert.equal(requests.length,0,'Wait until body is ready');listeners.DOMContentLoaded();
 return {listeners,requests,nodes,timers,store,get aborted(){return aborted;}};
}
function respond(f,version,status=200){f.requests.at(-1).onload({status,responseText:JSON.stringify({version})});}
for(const version of ['0.1.46','0.1.45','garbage','0.1.47<script>']){const f=fixture();respond(f,version);assert.equal(f.nodes.length,0);}
let f=fixture();respond(f,'0.1.47');assert.equal(f.nodes.length,1);
assert.equal(f.nodes[0].root.querySelector('a').href,'https://github.com/Truciaczek/Motyw/raw/refs/heads/main/dist/motyw.user.js');
assert.ok(f.nodes[0].root.querySelector('.version').textContent.includes('0.1.46 → 0.1.47'));
f.nodes[0].root.querySelector('button').onclick();assert.equal(f.nodes.length,0);
f.timers[0]();respond(f,'0.1.47');assert.equal(f.nodes.length,0,'Deferred version hidden');
f.timers[0]();respond(f,'0.1.48');assert.equal(f.nodes.length,1,'New release is not hidden by previous defer');
f.listeners.pagehide();assert.equal(f.nodes.length,0);assert.equal(f.aborted,true);
f=fixture();f.requests[0].onerror();assert.equal(f.nodes.length,0);f.timers[0]();respond(f,'0.1.47',404);assert.equal(f.nodes.length,0);
f.timers[0]();f.requests.at(-1).onload({status:200,responseText:'not json'});assert.equal(f.nodes.length,0);
f.timers[0]();respond(f,'0.2.0');assert.equal(f.nodes.length,1);
const bundle=fs.readFileSync(__dirname+'/../dist/motyw.user.js','utf8');
const manifest=JSON.parse(fs.readFileSync(__dirname+'/../version.json','utf8'));
assert.equal(manifest.version,bundle.match(/@version\s+(\S+)/)[1]);
assert.ok(!fs.readFileSync(__dirname+'/../dist/motyw.runtime.js','utf8').includes('const current='),'runtime no longer asks to reinstall');
assert.ok(bundle.includes('// @grant        GM_xmlhttpRequest'));
console.log('PASS: semantic version check, update URL, safe dialog text, 24h defer, newer release, HTTP/network/JSON errors, periodic check, cleanup and build/manifest version parity');
