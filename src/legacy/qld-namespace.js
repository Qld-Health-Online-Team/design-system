/**
 * @module legacy/qld-namespace
 *
 * Single home for the legacy `window.QLD.*` global namespace.
 *
 * Historically each component registered itself onto `window.QLD` as a side
 * effect at module-eval time, scattered across a dozen files, and `QLD.utils`
 * was a source module in its own right that the rest of the codebase imported
 * from. That surface is still part of the public (non-bundled) contract for
 * external callers, so it is preserved here — but it is now *only* an adapter:
 * every object below is assembled from modules that know nothing about
 * `window.QLD`, so the source can be reorganised freely and the components stay
 * side-effect-free and independently testable.
 *
 * Nothing inside `src/` should import from this file. New code imports the
 * underlying modules (`src/utils/*`, `src/behaviours/*`, the component modules)
 * directly. This file exists solely to keep external callers working, and
 * shrinks as they migrate.
 *
 * It must be imported early (see `component-loader.js`) so the globals exist
 * before any component init runs. Component initialisation itself lives in
 * `component-loader.js`.
 */

import { toggleToolTips } from "../behaviours/popover/controller.js";
import { tabs } from "../components/_global/js/tabs/global.js";
import * as accordion from "../components/accordion/js/global.js";
import initBasicSearch from "../components/basic_search/js/global.js";
import initCode from "../components/code/js/global.js";
import { fileUploads } from "../components/file_upload/js/global.js";
import { Modal } from "../components/modal/js/global.js";
import initTab from "../components/tab/js/global.js";
import initToggleTip from "../components/toggle_tip/js/global.js";
import initToolTip from "../components/tool_tip/js/global.js";
import * as animate from "../utils/animate.js";
import * as cookies from "../utils/cookies.js";
import * as dom from "../utils/dom.js";
import * as geolocation from "../utils/geolocation.js";
import * as icons from "../utils/icons.js";
import * as loading from "../utils/loading.js";
import * as storage from "../utils/storage.js";
import * as timing from "../utils/timing.js";
import * as url from "../utils/url.js";

// Each global object is spelled out member by member rather than spread, so the
// legacy contract stays explicit and a renamed or removed source export fails
// here at build time instead of silently dropping out of the namespace.

/**
 * `QLD.utils` — the legacy grab-bag of helpers. Its members now live in
 * `src/utils/*`; this object exists only to re-expose them under their historic
 * names, including the misspelled `getParamaterByName`.
 */
const utils = {
  browserJS: dom.enableJsClass,
  debounce: timing.debounce,
  // Predates `Array.from` being usable (IE11).
  listToArray: (nodeList) => Array.from(nodeList),
  setCookie: cookies.setCookie,
  getCookie: cookies.getCookie,
  setLocalStorage: storage.setLocalStorage,
  getLocalStorage: storage.getLocalStorage,
  removeLocalStorage: storage.removeLocalStorage,
  geolocateUser: geolocation.geolocateUser,
  setUserLocation: geolocation.setUserLocation,
  setUserLocationInStorage: geolocation.setUserLocationInStorage,
  isGeolocated: geolocation.isGeolocated,
  setLoadingState: loading.setLoadingState,
  // Spelling preserved for the legacy contract.
  getParamaterByName: url.getParameterByName,
  updateSvgIconPath: icons.updateSvgIconPath,
};

window.QLD = window.QLD || {};

window.QLD.utils = utils;
window.QLD.tabs = tabs;
window.QLD.animate = {
  CalculateAnimationSpecs: animate.CalculateAnimationSpecs,
  GetCSSPropertyBecauseIE: animate.GetCSSPropertyBecauseIE,
  CalculateAuto: animate.CalculateAuto,
  Stop: animate.Stop,
  Run: animate.Run,
  Toggle: animate.Toggle,
};
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
