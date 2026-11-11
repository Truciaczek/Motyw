(() => {
    'use strict';
    const embedded = __TRUCIAK_FALLBACK_RUNTIME__;
    const cacheKey = 'truciak:motyw:last-good-runtime:v1';
    const repo = 'Truciaczek/Motyw';
    const maxSize = 2000000;
    let request = null, stopped = false;
    const validVersion = value => /^\d+\.\d+\.\d+$/.test(value || '');
    function versionOf(source) {
        return typeof source === 'string' && source.length <= maxSize
            ? source.match(/\/\/ @version\s+(\d+\.\d+\.\d+)\s/ )?.[1] : null;
    }
    function valid(value) {
        return value?.schema === 1 && validVersion(value.version) &&
            versionOf(value.source) === value.version;
    }
    function newer(a,b) {
        const x=a.split('.').map(Number),y=b.split('.').map(Number);
        for(let i=0;i<3;i++)if(x[i]!==y[i])return x[i]>y[i];
        return false;
    }
    let fallback=embedded;
    try {
        const cached=GM_getValue(cacheKey,null);
        if(valid(cached) && !newer(embedded.version,cached.version)){compile(cached);fallback=cached;}
    } catch {}
    function get(url) {
        return new Promise((resolve,reject)=>{
            request=GM_xmlhttpRequest({method:'GET',url,anonymous:true,timeout:10000,
                headers:{'Cache-Control':'no-cache','Accept':'application/vnd.github+json'},
                onload:r=>r.status===200 && typeof r.responseText==='string' && r.responseText.length<=maxSize
                    ?resolve(r.responseText):reject(new Error('HTTP '+r.status)),
                onerror:()=>reject(new Error('Błąd połączenia')),
                ontimeout:()=>reject(new Error('Przekroczony czas pobierania')),
                onabort:()=>reject(new Error('Anulowano pobieranie'))});
        });
    }
    function compile(value) {
        if(!valid(value))throw new Error('Nieprawidłowa paczka Motyw NI');
        return new Function('unsafeWindow','GM_getValue','GM_setValue','GM_xmlhttpRequest',value.source);
    }
    function run(value,execute) {
        if(stopped)return;
        execute(unsafeWindow,GM_getValue,GM_setValue,GM_xmlhttpRequest);
        unsafeWindow.__truciakMotywRuntimeVersion=value.version;
    }
    const cleanup=()=>{stopped=true;request?.abort?.();};
    unsafeWindow.addEventListener('pagehide',cleanup,{once:true});
    async function start() {
        let latest,execute;
        try {
            // Resolve current commit first, then fetch an immutable URL: Raw's
            // branch cache cannot mix an older runtime with a new release.
            const commit=JSON.parse(await get('https://api.github.com/repos/'+repo+'/commits/main?t='+Date.now()));
            if(!/^[a-f0-9]{40}$/.test(commit.sha))throw new Error('Nieprawidłowa rewizja');
            if(stopped)return;
            if(fallback.revision===commit.sha){
                latest=fallback;
            } else {
                const source=await get('https://raw.githubusercontent.com/'+repo+'/'+commit.sha+'/dist/motyw.runtime.js');
                latest={schema:1,version:versionOf(source),revision:commit.sha,source};
            }
            execute=compile(latest);
            if(newer(fallback.version,latest.version))throw new Error('Pobrano starszą wersję');
        } catch(error) {
            if(stopped)return;
            console.warn('[Motyw NI] Korzystam z ostatniej dostępnej wersji:',error);
            latest=fallback;execute=compile(fallback);
        }
        if(stopped)return;
        try {
            run(latest,execute);
            try{GM_setValue(cacheKey,latest);}catch{}
        } catch(error) {
            console.error('[Motyw NI] Nie udało się uruchomić wersji '+latest.version,error);
            // Avoid mounting two panels if the first runtime partially started.
            if(latest!==fallback && !unsafeWindow.__truciakLoaded){
                try{run(fallback,compile(fallback));}catch(failure){console.error('[Motyw NI]',failure);}
            }
        }
    }
    void start();
})();
