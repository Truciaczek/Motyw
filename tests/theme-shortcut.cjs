const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/../tools/theme-shortcut.js','utf8');
(async()=>{
  const events={},classes=new Set(),attributes={};
  const control={classList:{toggle(name,value){value?classes.add(name):classes.delete(name);}},
    setAttribute:(k,v)=>attributes[k]=v,addEventListener:(k,v)=>events[k]=v};
  const host={dataset:{},attachShadow:()=>({querySelector:()=>control})};
  const preferences={},loading=new Set(),active=new Map(),loaded=new Map(),errors=new Map();
  let writes=0,fail=false,starts=0,renders=0,prevented=0;
  const window={__truciakEbonyTheme:{enabled:false,disable(){this.enabled=false;}}};
  const context={document:{createElement:()=>host,body:{appendChild(){}}},window,
    preferences,loading,active,loaded,errors,key:'modules',modules:[{id:'ebony-theme'}],
    GM_setValue(){if(fail)throw Error('storage unavailable');writes++;},
    async start(mod){starts++;window.__truciakEbonyTheme.enabled=true;active.set(mod.id,true);},
    render(){renders++;vm.runInContext('syncThemeShortcut()',sandbox);}};
  const sandbox=vm.createContext(context);vm.runInContext(source,sandbox);
  vm.runInContext('syncThemeShortcut()',sandbox);
  assert.equal(host.id,'truciak-ebony-shortcut');assert.equal(classes.has('active'),false);
  const right=()=>events.contextmenu({preventDefault(){prevented++;}});
  await right();assert.equal(preferences['ebony-theme'],true);assert.equal(starts,1);
  assert.equal(classes.has('active'),true);assert.equal(attributes['aria-pressed'],'true');
  await right();assert.equal(preferences['ebony-theme'],false);
  assert.equal(window.__truciakEbonyTheme.enabled,false);assert.equal(active.has('ebony-theme'),false);
  assert.equal(classes.has('active'),false);assert.equal(writes,2);
  // The main panel and map button share preferences and actual theme state.
  preferences['ebony-theme']=true;window.__truciakEbonyTheme.enabled=true;
  vm.runInContext('syncThemeShortcut()',sandbox);assert.equal(classes.has('active'),true);
  await right();assert.equal(preferences['ebony-theme'],false);
  loading.add('ebony-theme');await right();assert.equal(preferences['ebony-theme'],false);
  loading.clear();fail=true;await right();assert.equal(preferences['ebony-theme'],false);
  assert.equal(window.__truciakEbonyTheme.enabled,false);assert.ok(errors.has('ebony-theme'));
  assert.equal(events.click,undefined);assert.equal(prevented,5);assert.equal(renders,4);
  console.log('PASS: map shortcut PPM enable/disable, shared panel state, active indicator, loading guard and storage failure rollback');
})().catch(e=>{console.error(e);process.exit(1);});
