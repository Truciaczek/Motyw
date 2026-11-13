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
  __TRUCIAK_SEARCH_HELPER__
  __TRUCIAK_TAB_FRAME_HELPER__
  __TRUCIAK_MENU_TEXT_HELPER__
  const searchSprite='__TRUCIAK_SEARCH_IMAGE__';
  const hpStateSprite='__TRUCIAK_HP_STATE_SPRITE__';
  const hudSprite='__TRUCIAK_HUD_SPRITE__';
  const equipmentSlotSprite='__TRUCIAK_EQUIPMENT_SLOT_SPRITE__';
  const scope = 'html[data-truciak-theme="ebony"]';
  const rules = [];
  function rule(selectors, declarations) {
    rules.push(selectors.map(selector => `${scope} ${selector}`).join(',\n') + `{${declarations}}`);
  }
  // The top character HUD also has an irregular native sprite silhouette.
  // Do not replace its image with an opaque rectangle; tint only the strip .bg.
  rule(['.layer.interface-layer .positioner.top .hud-container'], 'background-color:transparent!important;');
  rule(['.layer.interface-layer .positioner.top .hud-container'], 'background-image:url("'+hudSprite+'")!important;');
  // Map-color beads have their own atlas background; keep native state offsets.
  rule(['.layer.interface-layer .positioner.top .hud-container .map_ball'], 'background-image:url("'+hudSprite+'")!important;');
  // Shared information glyph uses the edited atlas while native offsets stay intact.
  rule(['.info-icon'], 'background-image:url("'+hudSprite+'")!important;');
  // Who-is-here controls: map every original pixel's luminance to #12C9BD.
  // Keep original atlas/SVG, offsets, alpha and any native parent hover effects.
  rule(['.whoishere-window .increase-opacity',
    '.whoishere-window .manage-configuration-button.settings-button',
    '.whoishere-window .search-wrapper::before'],
    'filter:url("#truciak-menu-arrow-tint")!important;');
  // Tint the close SVG before its black shadow. Native hover first brightens
  // the original gray to white, then maps white to turquoise (never vice versa).
  rule(['.whoishere-window .ie-icon-close'],
    'filter:url("#truciak-menu-arrow-tint") drop-shadow(1px 1px 1px rgb(0,0,0))!important;');
  rule(['.whoishere-window .ie-icon-close:hover'],
    'filter:brightness(1.5) url("#truciak-menu-arrow-tint") drop-shadow(1px 1px 1px rgb(0,0,0))!important;');
  // Bottom HUD sprites include transparent cutouts around the orb and labels.
  // Keep their original images/masks; wood belongs to the strip behind them.
  rule(['.bottom-panel', '.bottom-panel-pointer-bg'], 'background-color:transparent!important;');
  // Native window frames use image alpha and border-image slices. Keep them
  // intact: a gradient border-image cannot preserve their carved silhouette.
  rule(['.layer.interface-layer .main-column', '.new-chat-window',
    '.game-window-positioner .character_wrapper .stats-wrapper', '.border-window:not(.transparent) .content',
    '.dialogue-window .border-image', '.tip-wrapper .content', '.popup-menu',
    '.auction-window .main-column-auction', '.world-window__info', '.layer.interface-layer .extended-stats'],
    'background-color:#171b20!important;background-image:none!important;');
  rule(['.layer.interface-layer .main-column.right-column',
    '.loot-window .bottom-wrapper .bottom-graphic',
    '.matchmaking-summary .bottom-panel-graphics', '.world-window__info'],
    'background-color:#252b31!important;background-image:none!important;');
  // World data strip: match the scrollbar handle without changing border geometry.
  rule(['.world-window__info'], 'border-color:#668298!important;');
  // Confirmed Skills parchment layer; preserve its native border image.
  rule(['.skills-window .right-column .middle-graphic.interface-element-middle-2-background'],
    'background-color:#171B20!important;');
  // Black introduction text needs an explicit readable tone on the dark panel.
  rule(['.skills-window .list-label-wrapper .label',
    '.skills-window .right-column .skills-points',
    '.skills-window .right-column .skills_learnt',
    '.skills-window .right-column .skills_total',
    '.skills-window .right-column .info1', '.skills-window .right-column .info2'],
    'color:#12C9BD!important;');
  // Explicit muted labels and placeholders; neutral text scaling does not cover these.
  rule(['.world-window .filter-label', '.world-window .legend'], 'color:#0B756E!important;');
  rule(['.world-window .start-lvl input::placeholder', '.world-window .stop-lvl input::placeholder', '.friend-enemy-list .bottom-friend-panel input::placeholder'],
    'color:#085E58!important;opacity:1!important;');
  // Typed values and caret belong to the shared native input, not its placeholder.
  rule(['.world-window .ni-input input.default', '.border-window .ni-input input.default'],
    'color:#0D978E!important;caret-color:#0D978E!important;');
  // Native clear glyph is a separate image layer; preserve its shape and offsets.
  rule(['.world-window .ni-input .clear-cross', '.border-window .ni-input .clear-cross'],
    'filter:url("#truciak-menu-arrow-tint")!important;');
  // Tint only the native arrow image, retaining its sprite offsets and rotation.
  rule(['.world-window .menu-arrow', '.border-window .menu-arrow'],
    'filter:url("#truciak-menu-arrow-tint")!important;');
  // Online-player grid shares its cell style; retain native widths and hover states.
  rule(['.players-online__item'], 'border-color:#668298!important;');
  // Reuse the native background class across panels, without replacing its carved border image.
  rule(['.world-window__bg', '.interface-element-middle-1-background'],
    'background-color:#171B20!important;');
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
  // Approved pixel-for-pixel recolor; retain native tiling, dimensions and icons.
  rule(['.equipment-wrapper .eq-slot.interface-element-one-item-slot-background-to-repeat'],
    'background-image:url("'+equipmentSlotSprite+'")!important;');
  // Test: original equipment placeholder glyphs darkened by 60%; native offsets retained.
  rule(['.equipment-wrapper .eq-cl'],
    'background-image:url("'+hudSprite+'")!important;');
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
  // Purple purchase/reset buttons: normal action palette only while idle.
  // Leave every existing hover/pressed/open rule in control of interaction.
  const purpleIdle=':is(.violet,.purple,.blink-violet):not(:hover):not(:active):not(.pressed):not(.active):not(.window-is-open):not([aria-expanded="true"]):not([aria-pressed="true"])';
  rule(['.button'+purpleIdle,'.widget-button'+purpleIdle],
    'color:#12C9BD!important;background:linear-gradient(#25494b,#142d30)!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;');
  rule(['.button'+purpleIdle+'::before','.widget-button'+purpleIdle+'::before'],
    'background:none!important;box-shadow:inset 0 0 0 1px #12C9BD!important;');
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
  // Native small-window trim: #CCC -> scrollbar #668298, preserve alpha and geometry.
  rule(['.border-window.transparent .border-image'],
    'box-shadow:rgb(1,1,1) 0 0 0 1px,#668298 0 0 0 2px,rgb(6,8,10) 0 0 0 3px,rgba(6,8,10,.4) 2px 2px 3px 3px!important;');
  rule(['.border-window.transparent .search-wrapper'],
    'border-top-color:rgba(128,163,190,.3)!important;');
  rule(['.border-window.transparent .window-resize-handle--corner'],
    'background-image:linear-gradient(135deg,transparent 45%,rgba(102,130,152,.8) 45%,rgba(102,130,152,.8) 55%,transparent 55%,transparent 70%,rgba(102,130,152,.8) 70%,rgba(102,130,152,.8) 80%,transparent 80%)!important;');
  // The native scroll track is transparent; tint only the movable handle.
  rule(['.scroll-wrapper .scrollbar-wrapper .track'], 'background:transparent!important;');
  rule(['.scroll-wrapper .scrollbar-wrapper .track .handle'],
    'background:rgba(102,130,152,.52)!important;border-color:#252b31!important;');
  rule(['.scroll-wrapper .scrollbar-wrapper .track .handle:hover'], 'background:rgba(18,201,189,.52)!important;');
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
  // Observation pins are toggles: green means already observed. Give only
  // that selected state the reverse of the ordinary Expand button palette.
  const observationPin='.button.observe-toggle';
  const pinFrame='color:#12C9BD!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;';
  rule([observationPin],
    'background:linear-gradient(#25494b,#142d30)!important;'+pinFrame);
  rule([observationPin+'.green',observationPin+actionState],
    'background:linear-gradient(#252b31,#171b20)!important;'+pinFrame);
  rule([observationPin+'.green'+actionState],
    'background:linear-gradient(#25494b,#142d30)!important;'+pinFrame);
  rule([observationPin+'::before',observationPin+actionState+'::before',
    observationPin+'.green'+actionState+'::before'],
    'background:none!important;box-shadow:inset 0 0 0 1px #12C9BD!important;');
  // Social remove buttons have no .green class; select their confirmed close glyph.
  // Outrank the generic .button:not(.green):not(.red)... idle selector.
  const socialRemove='.friend-enemy-list .buttons.action-buttons > .button.small:not(.green):has(> .ie-icon-close)';
  rule([socialRemove],
    'color:#12C9BD!important;background:linear-gradient(#25494b,#142d30)!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;');
  rule([socialRemove+actionState],
    'color:#12C9BD!important;background:linear-gradient(#252b31,#171b20)!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;');
  rule([socialRemove+'::before',socialRemove+actionState+'::before'],
    'background:none!important;box-shadow:inset 0 0 0 1px #12C9BD!important;');
  // Consumable quick slots: palette only; retain native dimensions and inset shadow.
  rule(['.bottom-panel .slots .usable-slot.interface-element-one-item-slot-2'],
    'background-color:#171B20!important;border-color:#252B31!important;outline-color:#101419!important;');
  // Native context menu actions share the ordinary button palette.
  const contextItem='.popup-menu__list > .menu-item';
  rule([contextItem],
    'color:#12C9BD!important;background:linear-gradient(#25494b,#142d30)!important;border-color:#12C9BD!important;box-shadow:inset 0 0 0 1px #12C9BD,inset 0 0 0 3px #171b20!important;');
  rule([contextItem+':not(.disabled):not(.cooldown-disabled):not([aria-disabled="true"]):is(:hover,:active,.active,.selected,.pressed)'],
    'color:#12C9BD!important;background:linear-gradient(#252b31,#171b20)!important;border-color:#12C9BD!important;');
  rule([contextItem+'::before'], 'background:none!important;');
  // Native tab fills only: preserve shadows, glow, geometry and pseudo-elements.
  const niTabCard='.tabs-nav > .card';
  rule([niTabCard],
    'background-color:#171B20!important;background-image:linear-gradient(#171B20,#171B20)!important;');
  rule([niTabCard+':is(.active,.selected,.current,.checked,[aria-selected="true"],[data-active="true"])',
        '.tabs-nav > .card:has(> .active)',
        '.tabs-nav > .card:has(> .selected)'],
    'background-color:#252B31!important;background-image:linear-gradient(#252B31,#252B31)!important;');
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
  // Shared native close button and its carved corner use the edited atlas.
  rule(['.border-window:not(.transparent):not(.tip-window) .close-button-corner-decor',
    '.border-window:not(.transparent):not(.tip-window) .close-button-corner-decor .close-button'],
    'background-image:url("'+hudSprite+'")!important;');
  // Keep game-driven low-HP/death state animation and sprite coordinates intact.
  rule(['.bottom-panel .hp-indicator .blood-frame'], 'background-image:url("'+hpStateSprite+'")!important;');
  const launcherExclusion=':not(.widget-truciak_addonsManager):not(.widget-gogatki_addonsManager):not(.widget-maddonz_addonsManager):not([data-truciak-native-launcher]):not([data-gogatki-native-launcher]):not(:has(.icon.truciak_addonsManager,.icon.gogatki_addonsManager,.icon.maddonz_addonsManager))';
  // Match the whole .button class, never the .buttons container or .button-*.
  const css = rules.join('\n').replaceAll('.widget-button','.widget-button'+launcherExclusion).replace(/\.button(?![\w-])/g,'.button'+launcherExclusion);
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
    <filter id="truciak-menu-arrow-tint" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values=".2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 .2126 .7152 .0722 0 0 0 0 0 1 0"/>
      <feColorMatrix type="matrix" values=".070588235294 0 0 0 0 0 .788235294118 0 0 0 0 0 .741176470588 0 0 0 0 0 1 0"/>
    </filter>
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
      let style=null, filterNode=null, previous=null, enabled=false,bottomBinding=null,worldWood=null,searchBinding=null,tabFrame=null,menuText=null,transparentWindows=null;
      function disable() {
        if (!enabled) return;
        transparentWindows?.cleanup();transparentWindows=null;
        menuText?.cleanup();menuText=null;
        searchBinding?.cleanup();searchBinding=null;
        tabFrame?.cleanup();tabFrame=null;
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
        searchBinding=bindTruciakSearchBackground(document,w,searchSprite);
        tabFrame=bindTruciakTabFrame(document,w);
        menuText=bindTruciakMenuText(document,w);
        transparentWindows=bindTruciakTransparentWindows(document,w);
      }
      w.__truciakEbonyTheme={enable,disable,get enabled(){return enabled;},get bottomAtlasTargets(){return bottomBinding?.count() || 0;}};
      w.addEventListener('pagehide',disable,{once:true});
      enable();
    }
  });
})();
