const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),bundle=fs.readFileSync(path.join(root,'dist/motyw.user.js'),'utf8');
const embedded=JSON.parse(bundle.match(/const source = (\{"ebony-theme":.*\})\[mod.id\];/)[1]);
assert.deepEqual(Object.keys(embedded),['ebony-theme']);
const catalogue=JSON.parse(fs.readFileSync(path.join(root,'catalogue.json'),'utf8'));
assert.deepEqual(catalogue.modules.map(m=>m.id),['ebony-theme']);
const dock=JSON.parse(bundle.match(/const source = ("(?:\\.|[^"\\])*");/)[1]);
const specs=dock.match(/const specs = \[(.*?)\];/s)[1];
assert.ok(specs.includes("icon:'map'"));assert.ok(!specs.includes("icon:'bolt'"));
const forbidden=['proximity-build','__truciakProximity','Zestaw pod przeciwnika','builds&action','installTruciakCapture','__truciakBuildCapture'];
function scan(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
 const p=path.join(dir,entry.name);if(entry.isDirectory())scan(p);
 else if(/\.(js|py|json|md)$/.test(p)&&!p.endsWith('public-release.cjs')){
  const source=fs.readFileSync(p,'utf8');for(const token of forbidden)assert.ok(!source.includes(token),'Unexpected private feature in '+p);
 }
}}
scan(root);
assert.ok(!bundle.includes('installTruciakCapture(window)'));
assert.ok(!/\b_g\s*\(/.test(bundle));
console.log('PASS: only public theme in sources/catalogue/bundle, map-only dock, no build automation or packet observer');
