import initHeader from "./components/header/js/global.js";
import initLeftHandNav from "./components/left_hand_navigation/js/global.js";
import initPromoPanel from "./components/promo_panel/js/global.js";

// JS
require("prismjs");

// Adding ES module initialisation for components
document.addEventListener("DOMContentLoaded", () => {
    initHeader(document);
    initLeftHandNav(document);
    initPromoPanel(document);
});

// CSS
import "./styles/global.scss";
