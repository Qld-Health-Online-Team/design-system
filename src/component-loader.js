// Global utilities (sets up window.QLD / QLD.utils) — must load before any init runs
import "./components/_global/js/global.js";

// Standard components
import { initAccordion } from "./components/accordion/js/global.js";
import initBreadcrumb from "./components/breadcrumbs/js/global.js";
import initHeader from "./components/header/js/global.js";
import initInPageNavigation from "./components/in_page_navigation/js/global.js";
import initInternalNavigation from "./components/internal_navigation/js/global.js";
import initLeftHandNav from "./components/left_hand_navigation/js/global.js";
import initPromoPanel from "./components/promo_panel/js/global.js";
import initVideoPlayer from "./components/video_player/js/global.js";
import { initMegaMenu } from "./components/mega_main_navigation/js/global";
import { initGlobalAlert } from "./components/global_alert/js/global.js";

// Global components
import initCtaLinks from "./components/_global/js/cta_links/global.js";
import initSelectBoxes from "./components/_global/js/select_boxes/global.js";

// Adding ES module initialisation for components
export default function initComponents() {
    // Call initGlobalAlert outside the DOMContentLoaded callback so it executes immediately. There is a noticeable
    // delay before the DOMContentLoaded event fires, which can cause dismissed global alerts to stay visible for a few
    // seconds before they are removed. Likely to remove DOMContentLoaded event listener in the future.
    initGlobalAlert();
    document.addEventListener("DOMContentLoaded", () => {
        initAccordion(document);
        initBreadcrumb();
        initCtaLinks(document);
        initHeader(document);
        initInPageNavigation(document);
        initInternalNavigation(document);
        initLeftHandNav(document);
        initMegaMenu();
        initPromoPanel(document);
        initSelectBoxes(document);
        initVideoPlayer(document);
    });

    window.addEventListener("resize", () => {
        initBreadcrumb(document, true);
    });
}
