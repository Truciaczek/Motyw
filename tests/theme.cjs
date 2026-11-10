const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const source=fs.readFileSync(__dirname+'/../modules/ebony-theme.js','utf8');
function fixture(engine={hero:{},map:{}}){
  const attrs=new Map(),nodes=[];
  const html={getAttribute:k=>attrs.get(k)??null,setAttribute:(k,v)=>attrs.set(k,v),removeAttribute:k=>attrs.delete(k)};
  const makeNode=()=>({style:{},setAttribute(){},remove(){const i=nodes.indexOf(this);if(i>=0)nodes.splice(i,1);}});
  const container={appendChild(node){nodes.push(node);}};
  const document={documentElement:html,head:container,body:container,createElement:makeNode,createElementNS:makeNode};
  const listeners={},w={Engine:engine,addEventListener:(type,fn)=>listeners[type]=fn};
  // No game request API is supplied: a purely visual module must work without it.
  let definition;
  vm.runInNewContext(source,{document,unsafeWindow:w,encodeURIComponent,GogatkiRuntime:{register:m=>definition=m}});
  return {definition,w,html,nodes,listeners};
}
const app=fixture(),m=app.definition;
assert.equal(m.id,'ebony-theme');assert.equal(app.nodes.length,0);
m.start();assert.equal(app.nodes.length,2);assert.equal(app.w.__truciakEbonyTheme.enabled,true);
assert.equal(app.html.getAttribute('data-truciak-theme'),'ebony');
const css=app.nodes.find(n=>n.textContent).textContent;
assert.ok(css.includes('#12C9BD'));assert.ok(!css.includes('#ef5350'));
assert.ok(m.testing.filterMarkup.includes('truciak-ebony-bar-tint'));
assert.equal(/https?:|@import|\bbackdrop-filter\s*:/.test(css),false);
// Only chrome/control selectors, never map/canvas/character/item sprites or semantic HP bars.
for(const block of css.split('}').filter(Boolean)){
  const selectors=block.split('{')[0].trim().split(',\n');
  for(const selector of selectors)assert.ok(selector.startsWith('html[data-truciak-theme="ebony"] '));
}
const mainCss=m.testing.css;
const nonFrameCss=mainCss.split('}').filter(b=>!b.includes('.main-buttons-container .widget-button')&&!b.includes('.truciak-hud-background')).join('}');
assert.equal(/(?:^|[;{])(?:width|height|position|display|transform|pointer-events|font-size)\s*:/.test(nonFrameCss),false);
assert.ok(css.includes('z-index:2!important;visibility:visible!important;opacity:1!important'));
assert.ok(css.includes('.icon.maddonz_addonsManager{position:relative!important'));
assert.equal(/\.(?:map|npc|item|hp|new-chat-message)(?:[\s.:{]|$)/.test(css),false);
m.start();app.w.__truciakEbonyTheme.enable();assert.equal(app.nodes.length,2);
app.w.__truciakEbonyTheme.disable();assert.equal(app.nodes.length,0);
assert.equal(app.html.getAttribute('data-truciak-theme'),null);
assert.equal(app.w.__truciakEbonyTheme.enabled,false);
app.w.__truciakEbonyTheme.disable();assert.equal(app.nodes.length,0);
app.html.setAttribute('data-truciak-theme','previous-value');
app.w.__truciakEbonyTheme.enable();assert.equal(app.nodes.length,2);
app.listeners.pagehide();assert.equal(app.nodes.length,0);
assert.equal(app.html.getAttribute('data-truciak-theme'),'previous-value');
app.w.__truciakEbonyTheme.enable();
app.html.setAttribute('data-truciak-theme','another-owner');
app.w.__truciakEbonyTheme.disable();assert.equal(app.html.getAttribute('data-truciak-theme'),'another-owner');
assert.throws(()=>fixture(null).definition.start(),/Nowego Interfejsu/);
assert.throws(()=>fixture({hero:{}}).definition.start(),/Nowego Interfejsu/);
// Original ornament graphics must survive: no replacement background on these nodes.
const ornamentBlocks=css.split('}').filter(block=>block.includes('filter:url("#truciak-ebony-'));
assert.equal(ornamentBlocks.length,2);
const ornamentSelectors=ornamentBlocks.map(b=>b.split('{')[0]).join(',\n');
const ornamentDeclarations=ornamentBlocks.map(b=>b.split('{')[1]).join('');
assert.equal(ornamentSelectors.trim().split(',\n').length,3);
assert.ok(ornamentSelectors.includes('.positioner.top .bg'));
assert.ok(ornamentSelectors.includes('.positioner.bottom .bg'));
assert.ok(ornamentSelectors.includes('.main-column.right-column .border'));
assert.equal(ornamentDeclarations.includes('background'),false);
assert.ok(m.testing.filterMarkup.includes('0 0 0 1 0')); // Alpha unchanged.
// Every button rule must exempt both addon launchers, including hover/active/pseudo states.
for(const block of mainCss.split('}').filter(b=>b.includes('.widget-button')||b.includes('.button'))){
  for(const selector of block.split('{')[0].trim().split(',\n').filter(s=>s.includes('.widget-button')||s.includes('.button'))){
    assert.ok(selector.includes(':not([data-truciak-native-launcher])'));
    assert.ok(selector.includes(':not([data-gogatki-native-launcher])'));
    assert.ok(selector.includes(':not(.widget-truciak_addonsManager)'));
    assert.ok(selector.includes(':not(.widget-gogatki_addonsManager)'));
    assert.ok(selector.includes(':not(.widget-maddonz_addonsManager)'));
    assert.ok(selector.includes('.icon.maddonz_addonsManager'));
  }
}
// All native tiles use one identical double-frame; notification overlays do not add borders.
assert.ok(mainCss.includes('inset 0 0 0 4px #12C9BD!important'));
assert.ok(mainCss.includes('box-sizing:border-box!important;border:0!important;background:none!important;box-shadow:none!important'));
assert.ok(mainCss.includes(' .widget-blink{inset:0!important;width:auto!important;height:auto!important;'));
// Bottom HUD retains native sprite alpha; synthetic wood cannot fill its rectangle.
const bottomBackgroundBlocks=mainCss.split('}').filter(b=>b.split('{')[0].split(',\n').some(t=>t.endsWith(' .bottom-panel')||t.endsWith(' .bottom-panel-pointer-bg')));
assert.equal(bottomBackgroundBlocks.length,1);
assert.ok(bottomBackgroundBlocks[0].endsWith('{background-color:transparent!important;'));
assert.ok(!bottomBackgroundBlocks[0].includes('background-image'));
assert.ok(!bottomBackgroundBlocks[0].includes('background-size'));
const topHudBlock=mainCss.split('}').find(b=>b.split('{')[0].endsWith(' .positioner.top .hud-container'));
assert.ok(topHudBlock.endsWith('{background-color:transparent!important;'));
assert.ok(!topHudBlock.includes('background-image'));
const bundle=fs.readFileSync(__dirname+'/../dist/motyw.user.js','utf8');
const embedded=JSON.parse(bundle.match(/const source = (\{"ebony-theme":.*\})\[mod.id\];/)[1]);
const pngUrl='data:image/png;base64,'+fs.readFileSync(__dirname+'/../assets/buttony.png').toString('base64');
assert.equal(embedded['ebony-theme'],source.replaceAll('__TRUCIAK_HUD_SPRITE__',pngUrl));
const catalogue=JSON.parse(bundle.match(/const fallbackCatalogue = (.*);/)[1]);
assert.deepEqual(catalogue.modules.map(m=>m.id),['ebony-theme']);
assert.equal(bundle.includes("preferences['ebony-theme'] = true"),false);
console.log('PASS: theme enable/disable/re-enable, NI-only guard, cleanup, no duplicate styles, original attribute restore, exact turquoise, local texture, scoped chrome, single embedded theme and opt-in catalogue');

// Brightest red sample maps exactly to the requested color, darker ones scale down.
const peak=m.testing.bloodPeak(new Uint8ClampedArray([200,20,20,255,100,10,10,255,255,255,255,0]));
assert.ok(Math.abs(peak-(.2126*200+.7152*20+.0722*20)/255)<1e-12);
const brightness=(r,g,b)=>(.2126*r+.7152*g+.0722*b)/255;
const map=(r,g,b)=>[18,201,189].map(c=>Math.round(c*Math.min(1,brightness(r,g,b)/peak)));
assert.deepEqual(map(200,20,20),[18,201,189]);
assert.deepEqual(map(100,10,10),[9,101,95]);
const bloodBlock=mainCss.split('}').find(b=>b.split('{')[0].endsWith(' .hp-indicator .blood'));
assert.ok(bloodBlock.endsWith('{filter:url("#truciak-blood-tint")!important;'));
assert.ok(!bloodBlock.includes('background-position'));
console.log('PASS: brightest red maps to #12C9BD, darker tones preserved, only blood layer filtered; sprite position untouched');

const actualPeak=m.testing.bloodPeak(new Uint8ClampedArray([246,86,43,255,255,170,0,1]));
const actualGain=2.1811388795275737;
assert.ok(Math.abs(actualPeak*actualGain-1)<1e-12);
assert.ok(m.testing.filterMarkup.includes('slope="'+actualGain+'"'));
assert.ok(!source.includes('new view.Image'));
console.log('PASS: exact original PNG peak calibrates to target; transparent edge noise ignored; no runtime image download');
assert.ok(!source.includes('truciak-hud-gray'));
assert.ok(!source.includes('truciak-hud-background'));

assert.ok(m.testing.filterMarkup.includes('result="lighterTrim"'));
