// Standard components
import initHeader from "./components/header/js/global.js";
import initInPageNavigation from "./components/in_page_navigation/js/global.js";
import initInternalNavigation from "./components/internal_navigation/js/global.js";
import initLeftHandNav from "./components/left_hand_navigation/js/global.js";
import initPromoPanel from "./components/promo_panel/js/global.js";
import initVideoPlayer from "./components/video_player/js/global.js";

// Global components
import initSelectBoxes from "./components/_global/js/select_boxes/global.js";

// Adding ES module initialisation for components
export default function initComponents() {
    document.addEventListener("DOMContentLoaded", () => {
        initHeader(document);
        initInPageNavigation(document);
        initInternalNavigation(document);
        initLeftHandNav(document);
        initPromoPanel(document);
        initSelectBoxes(document);
        initVideoPlayer(document);
    });
}
