/**
 * @module _global/legacyGlobal
 *
 * Single home for the legacy `window.QLD.*` global namespace.
 *
 * Historically each component registered itself onto `window.QLD` as a side
 * effect at module-eval time, scattered across a dozen files. That surface is
 * still part of the public (non-bundled) contract for external callers, so it
 * is preserved here — but centralised, so the individual component modules can
 * stay side-effect-free and independently testable.
 *
 * This module must be imported early (see `component-loader.js`) so the globals
 * exist before any component init runs. Component initialisation itself lives in
 * `component-loader.js`.
 */

// `import * as` for the modules whose legacy aggregate is a slice of their named
// exports; the object is then spelled out member-by-member below so the legacy
// contract stays explicit and a removed source export surfaces here.
import utils from "./global.js";
import * as animate from "./animate/global.js";
import { tabs } from "./tabs/global.js";
import { Modal } from "./modal/global.js";
import { toggleToolTips } from "./popover/controller.js";

// Feature components
import * as accordion from "../../accordion/js/global.js";
import { fileUploads } from "../../file_upload/js/global.js";
import initCode from "../../code/js/global.js";
import initBasicSearch from "../../basic_search/js/global.js";
import initTab from "../../tab/js/global.js";
import initToolTip from "../../tool_tip/js/global.js";
import initToggleTip from "../../toggle_tip/js/global.js";

// Expose the legacy `window.QLD.*` namespace for any external (non-bundled) callers.
// Objects that exist solely for this legacy surface are assembled here rather than
// in the component modules.
window.QLD = window.QLD || {};
window.QLD.utils = utils;
window.QLD.animate = {
  CalculateAnimationSpecs: animate.CalculateAnimationSpecs,
  GetCSSPropertyBecauseIE: animate.GetCSSPropertyBecauseIE,
  CalculateAuto: animate.CalculateAuto,
  Stop: animate.Stop,
  Run: animate.Run,
  Toggle: animate.Toggle,
};
window.QLD.tabs = tabs;
window.QLD.Modal = Modal;
window.QLD.toggleToolTips = toggleToolTips;
window.QLD.accordion = {
  Toggle: accordion.Toggle,
  ToggleAll: accordion.ToggleAll,
  Open: accordion.Open,
  Close: accordion.Close,
  initAccordion: accordion.initAccordion,
};
window.QLD.code = { init: initCode };
window.QLD.basicSearch = { init: initBasicSearch };
window.QLD.fileUploads = fileUploads;
window.QLD.tab = { init: () => initTab(document), initTab };
window.QLD.toolTip = { init: () => initToolTip(document), initToolTip };
window.QLD.toggleTip = { init: () => initToggleTip(document), initToggleTip };
