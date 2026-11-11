from pathlib import Path
import json,re,base64
root=Path(__file__).resolve().parents[1]
upstream=root/'vendor/firus-panel.user.js'
s=upstream.read_text()
module_sources={name:(root/('modules/'+name+'.js')).read_text() for name in ['ebony-theme']}
module_sources['ebony-theme']=module_sources['ebony-theme'].replace('__TRUCIAK_HUD_SPRITE__','data:image/png;base64,'+base64.b64encode((root/'assets/buttony.png').read_bytes()).decode('ascii'))
module_sources['ebony-theme']=module_sources['ebony-theme'].replace('__TRUCIAK_BOTTOM_ATLAS_HELPER__',(root/'tools/bottom-atlas.js').read_text())
module_sources['ebony-theme']=module_sources['ebony-theme'].replace('__TRUCIAK_HP_STATE_SPRITE__','data:image/png;base64,'+base64.b64encode((root/'assets/hpStateSprite.png').read_bytes()).decode('ascii'))
module_sources['ebony-theme']=module_sources['ebony-theme'].replace('__TRUCIAK_WORLD_WOOD_HELPER__',(root/'tools/world-wood.js').read_text())
capture='__TRUCIAK_COEXISTENCE__'
# The distributed module works independently of the red launcher as well.
# Local bundle uses no remote catalogue, dock or addon downloads.
s=re.sub(r'// @name .*', '// @name         Motyw NI',s)
s=re.sub(r'// @namespace .*', '// @namespace    truciaczek.motyw',s)
s=re.sub(r'// @version .*', '// @version      0.1.67',s)
s=re.sub(r'// @run-at .*', '// @run-at       document-start',s)
s=re.sub(r'^// @(downloadURL|updateURL|connect|grant        GM_xmlhttpRequest).*\n','',s,flags=re.M)
s=s.replace("    const window = unsafeWindow;", "    const window = unsafeWindow;\n"+capture,1)
s=s.replace('const source = await fetchSource(mod.url);','const source = __TRUCIAK_EMBEDDED_MODULES__[mod.id];')
s=s.replace('catalogue = validateCatalogue(JSON.parse(await fetchSource(url.href)));','catalogue = validateCatalogue(fallbackCatalogue);')
catalogue={'schemaVersion':1,'modules':[{'id':'ebony-theme','name':'Motyw - Stary ale jary','description':'Hebanowe drewno, grafitowe panele i turkusowe akcenty Firusia. Włączanie i wyłączanie bez F5.','url':'https://raw.githubusercontent.com/Truciaczek/Motyw/main/modules/ebony-theme.js'}]}
s=re.sub(r'const fallbackCatalogue = .*?;\n', 'const fallbackCatalogue = '+json.dumps(catalogue,ensure_ascii=False)+';\n',s)
s=s.replace('https://raw.githubusercontent.com/KoniecDniaDziecka/Gogatki/main/gogatki/catalogue.json','https://raw.githubusercontent.com/Truciaczek/Motyw/main/catalogue.json')
dock=(root/'vendor/firus-dock.js').read_text()
dock=re.sub(r'const specs = \[.*?\];', "const specs = [{id:'truciak-ebony-shortcut',name:'Motyw - Stary ale jary',control:'.tile',shadow:true,toggleOnly:true,activeControl:true,icon:'map'}];",dock,count=1,flags=re.S)
dock=dock.replace("const icons = {", "const icons = {map:'<path d=\"m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z\"/><path d=\"M9 3v15M15 6v15\"/>',")
s=s.replace('const source = await fetchSource(url.href);', 'const source = '+json.dumps(dock,ensure_ascii=False)+';')
# Visual themes can stop immediately; other upstream modules retain their reload behavior.
s=s.replace("if (preferences[mod.id] === true) start(mod);\n                render();", "if (preferences[mod.id] === true) start(mod);\n                else if(mod.id==='ebony-theme'){window.__truciakEbonyTheme?.disable();active.delete(mod.id);loaded.delete(mod.id);errors.delete(mod.id);}\n                render();")
s=s.replace('#12c9bd','#ef5350').replace('#21bd69','#ef5350').replace('#21BD69','#ef5350')
# Independent DOM IDs, preferences and widget identity avoid collisions with Firuś.
s=s.replace('gogatki','truciak').replace('gogatek','truciak').replace('Gogatki','Truciak')
# Keep the exact upstream module registration contract, including in embedded source.
s=s.replace('TruciakRuntime','GogatkiRuntime').replace('TruciakDockRuntime','GogatkiDockRuntime')
s=s.replace('Twoje dodatki w jednym miejscu','Dodatki Truciaka — Motyw')
s=s.replace("root.innerHTML = `<style>","root.innerHTML = `<style>",1)
# Anchor the corresponding menu corner to the native launcher corner.
a=s.index('    function placeList() {');b=s.index('    const positionKey',a)
s=s[:a]+"""    function placeList() {
        if (panel.hidden) return;
        placeTruciakMenu(panel,host.getBoundingClientRect(),document.querySelector('.widget-truciak_addonsManager'));
    }
"""+s[b:]
a=s.index('        function placePopup() {');b=s.index('        function float()',a)
s=s[:a]+"""        function placePopup() {
            if (!popup || popup.hidden) return;
            placeTruciakMenu(popup,main.getBoundingClientRect(),boundTile);
        }
"""+s[b:]
s=s.replace('    const window = unsafeWindow;', '    const window = unsafeWindow;\n'+(root/'tools/menu-position.js').read_text(),1)
# Final ruby T artwork: no selection UI or stored prototype preference.
from urllib.parse import quote
art='data:image/png;base64,'+base64.b64encode((root/'assets/ruby-t-balanced.png').read_bytes()).decode('ascii')
inner_frame='data:image/svg+xml,'+quote((root/'assets/ruby-t-inner-frame.svg').read_text(),safe='')
ruby_frame='conic-gradient(from 0deg,#391416 0deg,#b73f3d 30deg,#ef5350 45deg,#6e2528 70deg,#9a3535 90deg,#612126 115deg,#ef5350 135deg,#ad3b3b 160deg,#c54443 180deg,#73262b 200deg,#b63e3e 225deg,#5a1e24 250deg,#7d2b2f 270deg,#481820 290deg,#ef5350 315deg,#8b3032 340deg,#391416 360deg)'
style='appearance:none!important;box-sizing:border-box!important;display:flex!important;align-items:center!important;justify-content:center!important;width:44px!important;height:44px!important;min-width:44px!important;min-height:44px!important;padding:0!important;border:1px solid transparent!important;border-radius:5px!important;background:url("'+art+'") center/32px 32px no-repeat padding-box,url("'+inner_frame+'") center/44px 44px no-repeat border-box,linear-gradient(#171b20,#171b20) padding-box,'+ruby_frame+' border-box!important;box-shadow:none!important;opacity:1!important;filter:none!important;color:#ef5350!important;font-size:0!important;text-shadow:none!important'
s=re.sub(r"const launcherTileStyle = .*?;\n",lambda m:'const launcherTileStyle = '+json.dumps(style)+';\n',s,count=1)
s=s.replace('    const loading = new Set();','    const loading = new Set();\n'+(root/'tools/theme-shortcut.js').read_text())
s=s.replace('    function render() {','    function render() {\n        syncThemeShortcut();')
s=s.replace('__TRUCIAK_COEXISTENCE__',(root/'tools/launcher-coexistence.js').read_text())
# Version check runs independently of whether the optional theme is enabled.
s=s.replace('// @run-at', '// @grant        GM_xmlhttpRequest\n// @connect      raw.githubusercontent.com\n// @run-at',1)
version=re.search(r'// @version\s+(\S+)',s).group(1)
notice=(root/'tools/update-notice.js').read_text().replace('__TRUCIAK_CURRENT_VERSION__',version)
s=s.replace('    const window = unsafeWindow;', '    const window = unsafeWindow;\n'+notice,1)
(root/'version.json').write_text(json.dumps({'version':version},indent=2)+'\n')
# Keep only the README title in sync with the released userscript.
readme=root/'README.md'
readme.write_text(re.sub(r'(?m)^# Motyw NI(?: — v[^\n]+)?$', '# Motyw NI — v'+version, readme.read_text(), count=1))
# Insert module bytes last: the red launcher must not recolor the turquoise game theme.
s=s.replace('__TRUCIAK_EMBEDDED_MODULES__',json.dumps(module_sources,ensure_ascii=False))
(root/'dist/motyw.user.js').write_text('// Panel adapted from Gogatki by KoniecDniaDziecka (Firuś), commit 079fbc3.\n'+s)


(root/'catalogue.json').write_text(json.dumps(catalogue,ensure_ascii=False,indent=2)+'\n')
