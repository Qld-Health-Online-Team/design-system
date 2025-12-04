import initHeader from "./components/header/js/global.js";
import initLeftHandNav from "./components/left_hand_navigation/js/global.js";
import initPromoPanel from "./components/promo_panel/js/global.js";
import initVideoPlayer from "./components/video_player/js/global.js";

// Adding ES module initialisation for components
export default function initComponents() {
    document.addEventListener("DOMContentLoaded", () => {
        initHeader(document);
        initLeftHandNav(document);
        initPromoPanel(document);
        initVideoPlayer(document);
    });
}
