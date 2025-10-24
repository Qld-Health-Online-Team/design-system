import initLeftHandNav from "./components/left_hand_navigation/js/global.js";

// JS
require("prismjs");

// Adding ES module initialisation for components
document.addEventListener("DOMContentLoaded", () => {
    initLeftHandNav(document);
});

// CSS
import "./styles/global.scss";
