// Both independent launchers share one NI widget manager. Registration must
// include its complete persisted layout and must not finish a user drag session.
function installTruciakLauncherCoexistence(window) {
    const keys = new Set(['truciak_addonsManager', 'truciak_private_addonsManager', 'gogatki_addonsManager']);
    const patched = new WeakSet();
    const valid = p => Array.isArray(p) && Number.isInteger(p[0]) && p[0] >= 0 && typeof p[1] === 'string' && !!p[1].trim();
    function attach() {
        const manager = window.Engine?.widgetManager;
        if (!manager || patched.has(manager) || typeof manager.createOneWidget !== 'function') return;
        const original = manager.createOneWidget;
        const finish = manager.setEnableDraggingButtonsWidget;
        let registrationTurn = false;
        const initialized = new Set();
        manager.createOneWidget = function(key, layout, ...args) {
            if (this !== manager || !keys.has(key) || args[0] !== true || initialized.has(key)) {
                return original.call(this, key, layout, ...args);
            }
            let saved;
            try { saved = window.Engine?.serverStorage?.get(manager.getPathToHotWidgetVersion()); } catch {}
            const full = saved && typeof saved === 'object' && !Array.isArray(saved) ? {...saved} : {};
            const position = valid(full[key]) ? [...full[key]] : layout?.[key];
            if (valid(position)) full[key] = [...position];
            const set = manager.getDefaultWidgetSet?.();
            // Align registered addon defaults before NI (or the other launcher)
            // checks them. Never change unrelated widgets or server storage.
            for (const id of keys) if (set?.[id] && valid(full[id])) {
                set[id].index = full[id][0]; set[id].pos = full[id][1];
            }
            registrationTurn = true;
            window.queueMicrotask(() => { registrationTurn = false; });
            const result = original.call(this, key, full, ...args);
            // A rejected creation must remain retryable.
            if (!args[1]?.includes?.(key)) initialized.add(key);
            return result;
        };
        if (typeof finish === 'function') manager.setEnableDraggingButtonsWidget = function(enabled, ...args) {
            if (this === manager && registrationTurn && enabled === false) return;
            return finish.call(this, enabled, ...args);
        };
        patched.add(manager);
    }
    attach();
    const timer = window.setInterval(attach, 25);
    window.addEventListener('pagehide', () => window.clearInterval(timer), {once:true});
}
installTruciakLauncherCoexistence(window);
