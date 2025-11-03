import initHeader from "./components/header/js/global.js";

// JS
require("prismjs");

// Adding ES module initialisation for components
document.addEventListener("DOMContentLoaded", () => {
    initHeader(document);
});

// CSS
import "./styles/global.scss";
