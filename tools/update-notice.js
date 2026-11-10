// Checks only a small version manifest; never evaluates downloaded code.
(() => {
    const current='__TRUCIAK_CURRENT_VERSION__';
    const manifest='https://raw.githubusercontent.com/Truciaczek/Motyw/main/version.json';
    const install='https://github.com/Truciaczek/Motyw/raw/refs/heads/main/dist/motyw.user.js';
    const valid=v=>typeof v==='string' && /^\d{1,6}\.\d{1,6}\.\d{1,6}$/.test(v);
    function newer(a,b){
        if(!valid(a)||!valid(b))return false;
        const x=a.split('.').map(Number),y=b.split('.').map(Number);
        for(let i=0;i<3;i++)if(x[i]!==y[i])return x[i]>y[i];
        return false;
    }
    let stopped=false,request=null,host=null,timer=null,busy=false;
    const dismissedKey='truciak:theme:update-dismissed:v1';
    function show(version){
        if(stopped || host || !document.body)return;
        let dismissed;try{dismissed=GM_getValue(dismissedKey,null);}catch{}
        if(dismissed?.version===version && dismissed.until>Date.now())return;
        host=document.createElement('div');host.id='truciak-theme-update-notice';
        const root=host.attachShadow({mode:'open'});
        root.innerHTML=`<style>:host{all:initial;position:fixed;right:18px;bottom:18px;z-index:2147483647;font:14px/1.45 Arial;color:#dce6ee}section{box-sizing:border-box;width:330px;max-width:calc(100vw - 36px);padding:16px;background:#171b20;border:1px solid #12c9bd;border-radius:6px;box-shadow:0 8px 28px #0009}h2{font-size:16px;margin:0 0 8px}p{margin:0 0 14px;color:#c7d0d9}nav{display:flex;gap:10px}a,button{font:inherit;cursor:pointer;padding:7px 12px;border:1px solid #668298;border-radius:4px;text-decoration:none;color:#dce6ee;background:#252b31}a{border-color:#12c9bd;color:#12c9bd}:focus-visible{outline:2px solid #12c9bd;outline-offset:3px}</style><section role="dialog" aria-modal="false" aria-labelledby="update-title"><h2 id="update-title">Dostępna nowa wersja motywu</h2><p class="version"></p><nav><a target="_blank" rel="noopener noreferrer">Aktualizuj</a><button type="button">Później</button></nav></section>`;
        root.querySelector('.version').textContent='Wersja '+current+' → '+version+'. Potwierdź aktualizację w Tampermonkey, a potem odśwież grę.';
        root.querySelector('a').href=install;
        root.querySelector('button').onclick=()=>{
            try{GM_setValue(dismissedKey,{version,until:Date.now()+24*60*60*1000});}catch{}
            host?.remove();host=null;
        };
        document.body.appendChild(host);
    }
    function check(){
        if(stopped || busy || host)return;
        busy=true;
        try{request=GM_xmlhttpRequest({method:'GET',url:manifest+'?t='+Date.now(),timeout:10000,
            onload(response){busy=false;
                if(stopped || response.status!==200 || response.responseText.length>4096)return;
                try{const data=JSON.parse(response.responseText);if(newer(data.version,current))show(data.version);}catch{}
            },onerror(){busy=false;},ontimeout(){busy=false;},onabort(){busy=false;}
        });}catch{busy=false;}
    }
    function start(){if(stopped)return;check();timer=window.setInterval(check,30*60*1000);}
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
    window.addEventListener('pagehide',()=>{stopped=true;window.clearInterval(timer);request?.abort?.();host?.remove();host=null;},{once:true});
})();
