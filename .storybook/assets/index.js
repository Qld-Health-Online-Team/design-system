// Storybook index file to import storybook related assets
import "../core-assets/handlebar-helpers.js";
import "../core-assets/main.js";
import initAnimate from "./animate-js.js";
import initAccordion from "./accordion-js.js";
import { initBreadcrumbs, getTheElements } from "./breadcrumbs-js.js";
import initComponents from "../../src/component-loader.js";

// ES module initialisation for Core components
initComponents();

// ES module initialisation for Storybook specific components
document.addEventListener("DOMContentLoaded", () => {
    initAnimate(document);
    initAccordion(document);
    initBreadcrumbs(document);
    initAccordion(document, "overflow"); // Needed specifically for the breadcrumbs overflow functionality
});

window.addEventListener("resize", function () {
    getTheElements(true);
    initBreadcrumbs(document);
    initAccordion(document, "overflow");
});
