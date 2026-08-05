// JS
import * as dom from "./utils/dom.js";
import initComponents from "./component-loader.js";
import "prismjs";

// Swap the `no-js` html class for `js` as early as possible.
dom.enableJsClass();

// Adding ES module initialisation for components
initComponents();

// CSS
import "./styles/global.scss";
