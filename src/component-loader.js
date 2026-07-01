// Legacy global namespace (registers all window.QLD.* and self-inits standalone
// components) — must load before any init runs
import "./components/_global/js/legacyGlobal.js";

// Standard components
import { initAccordion } from "./components/accordion/js/global.js";
import initBannerAdvanced from "./components/banner_advanced/js/global.js";
import initBasicSearch from "./components/basic_search/js/global.js";
import initBreadcrumb from "./components/breadcrumbs/js/global.js";
import initCards from "./components/card_no_action/js/global.js";
import initCode from "./components/code/js/global.js";
import { initFileUpload } from "./components/file_upload/js/global.js";
import initHeader from "./components/header/js/global.js";
import initInPageNavigation from "./components/in_page_navigation/js/global.js";
import initInternalNavigation from "./components/internal_navigation/js/global.js";
import initLeftHandNav from "./components/left_hand_navigation/js/global.js";
import initPromoPanel from "./components/promo_panel/js/global.js";
import initTab from "./components/tab/js/global.js";
import initToggleTip from "./components/toggle_tip/js/global.js";
import initToolTip from "./components/tool_tip/js/global.js";
import initVideoPlayer from "./components/video_player/js/global.js";
import { initMegaMenu } from "./components/mega_main_navigation/js/global";
import { initGlobalAlert } from "./components/global_alert/js/global.js";

// Global components
import initCtaLinks from "./components/_global/js/cta_links/global.js";
import initSelectBoxes from "./components/_global/js/select_boxes/global.js";
import initModal from "./components/_global/js/modal/global.js";
import initTabs from "./components/_global/js/tabs/global.js";

// Adding ES module initialisation for components
export default function initComponents() {
  // Call initGlobalAlert outside the DOMContentLoaded callback so it executes immediately. There is a noticeable
  // delay before the DOMContentLoaded event fires, which can cause dismissed global alerts to stay visible for a few
  // seconds before they are removed. Likely to remove DOMContentLoaded event listener in the future.
  initGlobalAlert();
  document.addEventListener("DOMContentLoaded", () => {
    initAccordion(document);
    initBannerAdvanced(document);
    initBasicSearch(document);
    initBreadcrumb();
    initCards(document);
    initCode(document);
    initCtaLinks(document);
    initFileUpload(document);
    initHeader(document);
    initInPageNavigation(document);
    initInternalNavigation(document);
    initLeftHandNav(document);
    initMegaMenu();
    initModal();
    initPromoPanel(document);
    initSelectBoxes(document);
    initTab(document);
    initTabs();
    initToggleTip(document);
    initToolTip(document);
    initVideoPlayer(document);
  });

  window.addEventListener("resize", () => {
    initBreadcrumb(document, true);
  });
}
