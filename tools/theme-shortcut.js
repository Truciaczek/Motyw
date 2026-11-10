    // Always present, including when the optional theme is disabled.
    const themeShortcut=document.createElement('div');
    themeShortcut.id='truciak-ebony-shortcut';themeShortcut.dataset.compact='true';
    const themeShortcutRoot=themeShortcut.attachShadow({mode:'open'});
    themeShortcutRoot.innerHTML='<style>:host{display:none!important}</style><div class="panel collapsed"><button class="tile" type="button" hidden aria-label="Włącz lub wyłącz Motyw - Stary ale jary"></button></div>';
    document.body.appendChild(themeShortcut);
    const themeShortcutControl=themeShortcutRoot.querySelector('.tile');
    function syncThemeShortcut(){
        const enabled=window.__truciakEbonyTheme?.enabled===true;
        themeShortcutControl.classList.toggle('active',enabled);
        themeShortcutControl.setAttribute('aria-pressed',String(enabled));
    }
    themeShortcutControl.addEventListener('contextmenu',async event=>{
        event.preventDefault();
        if(loading.has('ebony-theme'))return;
        const mod=modules.find(value=>value.id==='ebony-theme');
        if(!mod)return;
        const previous=preferences[mod.id];
        preferences[mod.id]=previous!==true;
        try{GM_setValue(key,preferences);errors.delete(mod.id);}
        catch{preferences[mod.id]=previous;errors.set(mod.id,'Nie udało się zapisać ustawień.');render();return;}
        if(preferences[mod.id])await start(mod);
        else{
            window.__truciakEbonyTheme?.disable();
            active.delete(mod.id);loaded.delete(mod.id);errors.delete(mod.id);
        }
        render();
    });
