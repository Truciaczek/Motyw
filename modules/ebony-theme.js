/* Heban — visual theme for the stock Margonem NI. No game actions or remote assets.
 * NI selector reference: BartekGolab/Margonem, NI_BY_RAJDENS.txt (Rajdens).
 * Palette: original Gogatki panel by Firuś, accent #12C9BD.
 */
(() => {
  'use strict';
  // This native SVG supplies only a decorative wood texture, never game icons.
  const grain = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="96" viewBox="0 0 512 96"><defs><linearGradient id="ebony" x2="0" y2="1"><stop stop-color="#24292d"/><stop offset=".42" stop-color="#111416"/><stop offset="1" stop-color="#1b2024"/></linearGradient></defs><path fill="url(#ebony)" d="M0 0h512v96H0z"/><g fill="none" stroke="#70777d" stroke-opacity=".18"><path d="M-20 7C80 15 210-5 340 8s110 0 190-2M-20 14c120 12 210-10 350 2s125 0 200-1M-20 27c100-8 175 11 260 0s180-12 290 0M-20 33c120-8 185 12 270 0s160-13 280-1M-20 50c150 14 210-13 350 0s120 1 200-5M-20 58c150 13 210-12 350 0s120 1 200-5M-20 74c120-9 185 14 280 0s160-10 270 0M-20 83c120-9 185 10 280-1s160-9 270 0"/><path d="M-20 19c180 2 160 16 310 0s150 3 240 0M-20 41c180 2 160-15 310 0s150-3 240 0M-20 66c180 2 160 16 310 0s150 3 240 0M-20 91c180 2 160-15 310 0s150-3 240 0" stroke-opacity=".06"/></g></svg>`;
  const wood = `url("data:image/svg+xml,${encodeURIComponent(grain)}")`;
  __TRUCIAK_BOTTOM_ATLAS_HELPER__
  __TRUCIAK_WORLD_WOOD_HELPER__
  const hpStateSprite='__TRUCIAK_HP_STATE_SPRITE__';
  const hudSprite='__TRUCIAK_HUD_SPRITE__';
  const scope = 'html[data-truciak-theme="ebony"]';
  const rules = [];
  function rule(selectors, declarations) {
    rules.push(selectors.map(selector => `${scope} ${selector}`).join(',\n') + `{${declarations}}`);
  }
  // The top character HUD also has an irregular native sprite silhouette.
  // Do not replace its image with an opaque rectangle; tint only the strip .bg.
  rule(['.layer.interface-layer .positioner.top .hud-container'], 'background-color:transparent!important;');
  rule(['.layer.interface-layer .positioner.top .hud-container'], 'background-image:url("'+hudSprite+'")!important;');
  // Bottom HUD sprites include transparent cutouts around the orb and labels.
  // Keep their original images/masks; wood belongs to the strip behind them.
  rule(['.bottom-panel', '.bottom-panel-pointer-bg'], 'background-color:transparent!important;');
  // Native window frames use image alpha and border-image slices. Keep them
  // intact: a gradient border-image cannot preserve their carved silhouette.
  rule(['.layer.interface-layer .main-column', '.new-chat-window',
    '.game-window-positioner .character_wrapper .stats-wrapper', '.border-window .content',
    '.dialogue-window .border-image', '.tip-wrapper .content', '.popup-menu',
    '.auction-window .main-column-auction', '.world-window__info', '.layer.interface-layer .extended-stats'],
    'background-color:#171b20!important;background-image:none!important;');
  rule(['.layer.interface-layer .main-column.right-column',
    '.loot-window .bottom-wrapper .bottom-graphic',
    '.matchmaking-summary .bottom-panel-graphics', '.world-window__info'],
    'background-color:#252b31!important;background-image:none!important;');
  // Keep the game's original image, sprite offsets, alpha mask and carved edge.
  // Only empty decorative background nodes get the filter, never their parent panels.
  rule(['.layer.interface-layer .positioner.top .bg',
    '.layer.interface-layer .positioner.bottom .bg'],
    'filter:url("#truciak-ebony-bar-tint")!important;');
  rule(['.layer.interface-layer .main-column.right-column .border'],
    'filter:url("#truciak-ebony-ornament-tint")!important;');
  rule(['.layer.interface-layer .heroname',
    '.layer.interface-layer .world-name', '.layer.interface-layer .location',
    '.layer.interface-layer .coords', '.layer.interface-layer .herogold', '.layer.interface-layer .herocredits'],
    'color:#edf3f7!important;text-shadow:0 1px 2px #000!important;');
  rule(['.border-window .content', '.dialogue-window .content', '.popup-menu .menu-item'],
    'color:#c7d0d9!important;');
  rule(['.chat-input-wrapper .control-wrapper', '.chat-input-wrapper .magic-input-wrapper',
    '.chat-input-wrapper .magic-input', '.chat-input-wrapper .control-wrapper .menu-card',
    '.chat-input-wrapper .control-wrapper .menu-card .card-name'],
    'background:#171b20!important;color:#dce6ee!important;border-color:#668298!important;');
  rule(['.chat-channel-card-wrapper', '.new-chat-window .chat-message-wrapper'],
    'border-color:#668298!important;');
  // Original inventory/slot sprite coordinates and transparent masks stay intact.
  rule(['.game-window-positioner .inventory_wrapper .inventory-grid-bg'],
    'background-color:#252b31!important;background-blend-mode:luminosity!important;');
  rule(['.button:not(.green):not(.red):not(.violet):not(.purple):not(.blink-violet)',
    '.widget-button:not(.green):not(.red):not(.violet):not(.purple):not(.blink-violet)', '.btn-min'],
    'background-image:linear-gradient(#252b31,#171b20)!important;box-shadow:inset 0 0 0 1px #668298,inset 0 0 0 3px #171b20!important;');
  rule(['.button.green', '.widget-button.green'],
    'color:#12C9BD!important;background-image:linear-gradient(#25494b,#142d30)!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;');
  rule(['.button.green::before', '.widget-button.green::before'],
    'background-image:none!important;box-shadow:inset 0 0 0 1px #12C9BD!important;');
  rule(['.button.green.pressed', '.widget-button.green.window-is-open::before',
    '.button.green:not(.disabled):hover', '.widget-button.green:not(.disabled):hover'],
    'background:#12C9BD!important;color:#101b20!important;box-shadow:inset 0 0 0 1px #64e5dc!important;');
  rule(['.chat-channel-card-wrapper .chat-channel-card.active',
    '.cards-header-wrapper .cards-header .card.active',
    '.cards-header-wrapper .cards-header .card.selected'],
    'color:#12C9BD!important;border-color:#12C9BD!important;background-color:#203b40!important;');
  rule(['.popup-menu .menu-item:hover:not(.disabled):not(.cooldown-disabled)',
    '.dialogue-window .content .answers li:hover'],
    'background-color:#203b40!important;color:#12C9BD!important;border-color:#12C9BD!important;');
  rule(['.bottom-panel .exp-bar-wrapper .exp-progress .progress .inner'],
    'background:linear-gradient(#49dcd1,#12C9BD 45%,#0d7b76)!important;');
  rule(['.game-window-positioner .character_wrapper .stats-wrapper .stats-list li .value'],
    'color:#12C9BD!important;');
  rule(['.dialogue-window .content .answers li'], 'border-bottom-color:#668298!important;');
  rule(['.scroll-wrapper .scrollbar-wrapper .track'], 'background:#171b20!important;');
  rule(['.scroll-wrapper .scrollbar-wrapper .track .handle'],
    'background:#668298!important;border-color:#252b31!important;');
  rule(['.scroll-wrapper .scrollbar-wrapper .track .handle:hover'], 'background:#12C9BD!important;');
  rule(['.border-window input[type="checkbox"]', '.border-window input[type="radio"]'],
    'accent-color:#12C9BD!important;');
  // One shared frame for every native bar tile. Notification overlays must
  // not paint another border on top of it (the source of the thicker top edge).
  const nativeFrame='box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20,inset 0 0 0 4px #12C9BD!important;';
  rule(['.main-buttons-container .widget-button'],
    'border:0!important;color:#12C9BD!important;background:linear-gradient(#25494b,#142d30)!important;'+nativeFrame);
  // Requested inverted interaction: turquoise idle, graphite on hover/open.
  rule(['.main-buttons-container .widget-button:not(.disabled):hover',
    '.main-buttons-container .widget-button.window-is-open',
    '.main-buttons-container .widget-button.pressed',
    '.main-buttons-container .widget-button.active'],
    'color:#12C9BD!important;background:linear-gradient(#252b31,#171b20)!important;'+nativeFrame);
  rule(['.main-buttons-container .widget-button::before', '.main-buttons-container .widget-button::after'],
    'inset:0!important;width:auto!important;height:auto!important;box-sizing:border-box!important;border:0!important;background:none!important;box-shadow:none!important;');
  rule(['.main-buttons-container .widget-button .widget-blink'],
    'inset:0!important;width:auto!important;height:auto!important;box-sizing:border-box!important;border:0!important;background:none!important;'+nativeFrame);
  // Native green open-state paints ::before above the tile background. Override
  // that state layer explicitly, not just the base tile below it.
  const interacted='.main-buttons-container .widget-button:not(.disabled):is(:hover,.window-is-open,.pressed,.active)';
  rule([interacted], 'color:#12C9BD!important;background:linear-gradient(#252b31,#171b20)!important;'+nativeFrame);
  rule([interacted+'::before',interacted+'::after'],
    'background:none!important;box-shadow:none!important;border:0!important;');
  rule([interacted+' .widget-blink'],
    'background:none!important;'+nativeFrame);
  // Ordinary NI action buttons (stats, battle logs, etc.) use the same
  // interaction palette. Keep their default size, frame, and icon layers.
  const actionState=':not(.disabled):not([disabled]):not([aria-disabled="true"]):is(:hover,:active,.pressed,.active,.window-is-open,[aria-expanded="true"],[aria-pressed="true"])';
  rule(['.button'+actionState,'.btn-min'+actionState],
    'color:#12C9BD!important;background:linear-gradient(#252b31,#171b20)!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;');
  rule(['.button'+actionState+'::before','.btn-min'+actionState+'::before'],
    'background:none!important;box-shadow:inset 0 0 0 1px #12C9BD!important;');
  // Native title rails are inset shadows, not CSS borders. Keep their widths
  // and center fill, and map each rail through the shared ornament palette.
  rule(['.interface-element-border-window-header-middle', '.trade-window header .h_background .middle',
    '.border-window:not(.transparent):not(.tip-window) .header-label-positioner .header-label'],
    'box-shadow:inset 0 1px #2e3232,inset 0 2px #5d7080,inset 0 3px #4c5b68,inset 0 4px #17181a,inset 0 -2px #282f35,inset 0 -3px #3e4a54,inset 0 -4px #60646a!important;');
  // Native dropdown entries are separate from the trigger's .button.
  // Match their actual value/text structure, without touching addon comboboxes.
  const choice='.option[value]:has(> .text)';
  rule([choice],
    'color:#12C9BD!important;background:linear-gradient(#25494b,#142d30)!important;border-color:#12C9BD!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;');
  rule([choice+' > .text'], 'color:inherit!important;background:none!important;');
  rule([choice+':not(.disabled):not([aria-disabled="true"]):is(:hover,:active,.selected,.active,.pressed,[aria-selected="true"])'],
    'color:#12C9BD!important;background:linear-gradient(#252b31,#171b20)!important;border-color:#12C9BD!important;');
  rule([choice+'::before'], 'background:none!important;');
  rule(['.bottom-panel .hp-indicator .blood'], 'filter:url("#truciak-blood-tint")!important;');
  // The game keeps every native sprite offset and dimension; only its atlas URL changes.
  rule(['[data-truciak-bottom-atlas-base="true"]', '[data-truciak-bottom-atlas-before="true"]::before', '[data-truciak-bottom-atlas-after="true"]::after'],
    'background-image:url("'+hudSprite+'")!important;');
  // Keep game-driven low-HP/death state animation and sprite coordinates intact.
  rule(['.bottom-panel .hp-indicator .blood-frame'], 'background-image:url("'+hpStateSprite+'")!important;');
  const launcherExclusion=':not(.widget-truciak_addonsManager):not(.widget-gogatki_addonsManager):not(.widget-maddonz_addonsManager):not([data-truciak-native-launcher]):not([data-gogatki-native-launcher]):not(:has(.icon.truciak_addonsManager,.icon.gogatki_addonsManager,.icon.maddonz_addonsManager))';
  const css = rules.join('\n').replaceAll('.widget-button','.widget-button'+launcherExclusion).replaceAll('.button','.button'+launcherExclusion);
  // Keep Maddonz artwork above the native tile's decorative pseudo-elements.
  const maddonzTile = scope+' .widget-maddonz_addonsManager,'+scope+' .widget-button:has(.icon.maddonz_addonsManager)';
  const launcherLayers = maddonzTile+'{isolation:isolate!important}'+scope+' .widget-maddonz_addonsManager .icon,'+scope+' .widget-button .icon.maddonz_addonsManager{position:relative!important;z-index:2!important;visibility:visible!important;opacity:1!important}';
  // Separate warm wood pixels from neutral carved trim within the original sprite.
  // A single steep tone curve used to crush the wood grain together with the shadows.
  // The discrete warm-pixel mask prevents bright trim from bleeding into brown wood.
  // Native size, sprite offset, trim matrix and transparent silhouettes stay unchanged.
  const tintPrimitives=`
    <feColorMatrix in="SourceGraphic" type="matrix" values=".2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 0 0 0 1 0" result="luminance"/>
    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 4 0 -4 0 -.08" result="warmWoodMaskSoft"/>
    <feComponentTransfer in="warmWoodMaskSoft" result="warmWoodMask"><feFuncA type="discrete" tableValues="0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"/></feComponentTransfer>
    <feColorMatrix in="luminance" type="matrix" values=".065 0 0 0 .008 0 .070 0 0 .010 0 0 .075 0 .012 0 0 0 1 0" result="ebonyGrain"/>
    <feColorMatrix in="luminance" type="matrix" values=".349020 0 0 0 .145098 0 .435294 0 0 .168627 0 0 .498039 0 .192157 0 0 0 1 0" result="lighterTrim"/>
    <feComposite in="ebonyGrain" in2="warmWoodMask" operator="in" result="wood"/>
    <feComposite in="lighterTrim" in2="warmWoodMask" operator="out" result="trim"/>
    <feComposite in="wood" in2="trim" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
  `;
  const barPrimitives=tintPrimitives.replace(
    '.065 0 0 0 .008 0 .070 0 0 .010 0 0 .075 0 .012',
    '.55 0 0 0 .025 0 .57 0 0 .028 0 0 .60 0 .032'
  ).replace('k4="0"/>','k4="0" result="tintedOriginal"/>');
  // Reuse the final strip wood mapping, but keep non-wood ornaments original.
  const windowWoodPrimitives=barPrimitives.replace(
    '<feColorMatrix in="luminance" type="matrix" values=".349020 0 0 0 .145098 0 .435294 0 0 .168627 0 0 .498039 0 .192157 0 0 0 1 0" result="lighterTrim"/>',
    '<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" result="lighterTrim"/>'
  );
  const windowWoodFilter='<filter id="truciak-window-wood" color-interpolation-filters="sRGB">'+windowWoodPrimitives+'</filter>';
  const windowFrameFilter='<filter id="truciak-window-wood" color-interpolation-filters="sRGB">'+barPrimitives+'</filter>';
  // Fill only the very dark, neutral, opaque seam. No pixel coordinates or new outlines.
  const seamPrimitives=`
    <feColorMatrix in="luminance" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 -8 0 0 0 1" result="darkNeutralSoft"/>
    <feComponentTransfer in="darkNeutralSoft" result="darkNeutral"><feFuncA type="discrete" tableValues="0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"/></feComponentTransfer>
    <feComposite in="darkNeutral" in2="SourceAlpha" operator="in" result="opaqueSeam"/>
    <feComposite in="opaqueSeam" in2="warmWoodMask" operator="out" result="seamMask"/>
    <feTurbulence type="fractalNoise" baseFrequency=".012 .14" numOctaves="2" seed="9" result="seamNoise"/>
    <feColorMatrix in="seamNoise" type="matrix" values=".06 0 0 0 .08 0 .06 0 0 .09 0 0 .065 0 .10 0 0 0 0 1" result="seamWood"/>
    <feComposite in="seamWood" in2="seamMask" operator="in" result="filledSeam"/>
    <feComposite in="tintedOriginal" in2="seamMask" operator="out" result="keptDetails"/>
    <feComposite in="keptDetails" in2="filledSeam" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>`;
  // Calibrated from original krew-klatki.png (411x110): visible peak RGB 246,86,43.
  // Alpha-weighted measurement ignores invisible RGB noise at antialiased edges.
  const filterMarkup=`<defs>
    <filter id="truciak-blood-tint" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values=".2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 0 0 0 1 0"/>
      <feComponentTransfer><feFuncR type="linear" slope="2.1811388795275737"/><feFuncG type="linear" slope="2.1811388795275737"/><feFuncB type="linear" slope="2.1811388795275737"/></feComponentTransfer>
      <feColorMatrix type="matrix" values=".070588235294 0 0 0 0 0 .788235294118 0 0 0 0 0 .741176470588 0 0 0 0 0 1 0"/>
    </filter>
    <filter id="truciak-ebony-ornament-tint" color-interpolation-filters="sRGB">${tintPrimitives}</filter>
    <filter id="truciak-ebony-bar-tint" color-interpolation-filters="sRGB">${barPrimitives}${seamPrimitives}</filter>
  </defs>`;
  function bloodPeak(data) {
    let peak=0;
    for(let i=0;i<data.length;i+=4){
      const [r,g,b,a]=[data[i],data[i+1],data[i+2],data[i+3]];
      if(a && r>g && r>b)peak=Math.max(peak,(.2126*r+.7152*g+.0722*b)*a/(255*255));
    }
    return peak || 1;
  }
  GogatkiRuntime.register({
    id:'ebony-theme', name:'Motyw - Stary ale jary',
    description:'Hebanowe drewno, grafitowe panele i turkusowe akcenty Firusia. Włączanie i wyłączanie bez F5.',
    testing:{css,filterMarkup,bloodPeak,windowWoodFilter},
    start() {
      const w=unsafeWindow;
      if (!w.Engine?.hero || !w.Engine?.map) throw new Error('Motyw wymaga Nowego Interfejsu Margonem.');
      if (w.__truciakEbonyTheme) { w.__truciakEbonyTheme.enable(); return; }
      const attribute='data-truciak-theme', styleId='truciak-ebony-theme-style';
      let style=null, filterNode=null, previous=null, enabled=false,bottomBinding=null,worldWood=null;
      function disable() {
        if (!enabled) return;
        worldWood?.cleanup();worldWood=null;
        bottomBinding?.cleanup();bottomBinding=null;
        style?.remove();style=null;filterNode?.remove();filterNode=null;
        if (document.documentElement.getAttribute(attribute)==='ebony') {
          if(previous===null)document.documentElement.removeAttribute(attribute);
          else document.documentElement.setAttribute(attribute,previous);
        }
        enabled=false;
      }
      function enable() {
        if(enabled)return;
        previous=document.documentElement.getAttribute(attribute);
        filterNode=document.createElementNS('http://www.w3.org/2000/svg','svg');
        filterNode.setAttribute('width','0');filterNode.setAttribute('height','0');
        filterNode.setAttribute('aria-hidden','true');filterNode.style.position='absolute';
        filterNode.innerHTML=filterMarkup;
        (document.body || document.documentElement).appendChild(filterNode);
        style=document.createElement('style');style.id=styleId;style.textContent=css+launcherLayers;
        (document.head || document.documentElement).appendChild(style);
        document.documentElement.setAttribute(attribute,'ebony');
        enabled=true;
        bottomBinding=bindTruciakBottomAtlas(document,w);
        worldWood=bindTruciakWorldWood(document,w,windowWoodFilter,windowFrameFilter);
      }
      w.__truciakEbonyTheme={enable,disable,get enabled(){return enabled;},get bottomAtlasTargets(){return bottomBinding?.count() || 0;}};
      w.addEventListener('pagehide',disable,{once:true});
      enable();
    }
  });
})();
