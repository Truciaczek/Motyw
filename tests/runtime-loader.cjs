const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const template=fs.readFileSync(__dirname+'/../tools/runtime-loader.js','utf8');
const runtime=(v,code='')=>({schema:1,version:v,source:'// @version '+v+'\nunsafeWindow.runs.push("'+v+'");unsafeWindow.preference=GM_getValue("truciak:modules:v1",{});'+code});
const sha='a'.repeat(40),cacheKey='truciak:motyw:last-good-runtime:v1';
function fixture(cached){
 const requests=[],stored=new Map([['truciak:modules:v1',{'ebony-theme':true}]]),listeners={},window={runs:[],addEventListener:(n,f)=>listeners[n]=f};
 if(cached)stored.set(cacheKey,cached);
 const context={unsafeWindow:window,GM_getValue:(k,d)=>stored.has(k)?stored.get(k):d,GM_setValue:(k,v)=>stored.set(k,v),GM_xmlhttpRequest:r=>{requests.push(r);return {abort(){}};},console:{warn(){},error(){}}};
 vm.runInNewContext(template.replace('__TRUCIAK_FALLBACK_RUNTIME__',JSON.stringify(runtime('0.1.73'))),context);
 return {requests,stored,listeners,window};
}
const flush=async()=>{for(let i=0;i<8;i++)await Promise.resolve();};
const respond=(f,body,status=200)=>f.requests.at(-1).onload({status,responseText:body});
(async()=>{
 let f=fixture();assert.ok(f.requests[0].url.startsWith('https://api.github.com/repos/Truciaczek/Motyw/commits/main?'));
 respond(f,JSON.stringify({sha}));await flush();assert.equal(f.requests[1].url,'https://raw.githubusercontent.com/Truciaczek/Motyw/'+sha+'/dist/motyw.runtime.js');
 respond(f,runtime('0.1.74').source);await flush();assert.deepEqual(f.window.runs,['0.1.74']);assert.equal(f.window.__truciakMotywRuntimeVersion,'0.1.74');assert.equal(f.window.preference['ebony-theme'],true);assert.equal(f.stored.get(cacheKey).version,'0.1.74');
 f=fixture({...runtime('0.1.74'),revision:sha});respond(f,JSON.stringify({sha}));await flush();assert.equal(f.requests.length,1,'unchanged commit reuses cached runtime');assert.deepEqual(f.window.runs,['0.1.74']);
 f=fixture();f.requests[0].onerror();await flush();assert.deepEqual(f.window.runs,['0.1.73']);
 f=fixture(runtime('0.1.75'));f.requests[0].ontimeout();await flush();assert.deepEqual(f.window.runs,['0.1.75']);
 f=fixture(runtime('0.1.75'));respond(f,JSON.stringify({sha}));await flush();respond(f,runtime('0.1.74').source);await flush();assert.deepEqual(f.window.runs,['0.1.75'],'do not roll back newer cache');
 f=fixture();respond(f,'not JSON');await flush();assert.deepEqual(f.window.runs,['0.1.73']);
 f=fixture();respond(f,JSON.stringify({sha:'../../evil'}));await flush();assert.equal(f.requests.length,1);assert.deepEqual(f.window.runs,['0.1.73']);
 f=fixture();respond(f,JSON.stringify({sha}));await flush();respond(f,'// @version 0.1.74\nsyntax error !');await flush();assert.deepEqual(f.window.runs,['0.1.73']);assert.equal(f.stored.get(cacheKey).version,'0.1.73');
 f=fixture({schema:1,version:'0.1.80',source:'// @version 0.1.80\nbad syntax !'});f.requests[0].onerror();await flush();assert.deepEqual(f.window.runs,['0.1.73'],'corrupt cache ignored');
 f=fixture();f.listeners.pagehide();respond(f,JSON.stringify({sha}));await flush();assert.deepEqual(f.window.runs,[]);assert.equal(f.requests.length,1);
 f=fixture();respond(f,'error',403);await flush();assert.deepEqual(f.window.runs,['0.1.73']);
 const root=__dirname+'/../',installer=fs.readFileSync(root+'dist/motyw.user.js','utf8'),source=fs.readFileSync(root+'dist/motyw.runtime.js','utf8');
 const bundled=JSON.parse(installer.match(/const embedded = (.*);/)[1]);assert.equal(bundled.source,source);assert.equal(bundled.version,JSON.parse(fs.readFileSync(root+'version.json','utf8')).version);
 assert.ok(installer.includes('// @name         Motyw NI\n'));assert.ok(installer.includes('// @namespace    truciaczek.motyw\n'));assert.ok(installer.includes('// @connect      api.github.com'));
 assert.ok(!source.includes('truciak-update-notice'),'no reinstallation popup in auto-updated runtime');
 console.log('PASS: immutable current-commit loading, newest release after F5, same preference storage, offline and timeout fallback, rollback prevention, corrupt response/cache handling, navigation cancellation and installer fallback parity');
})();
