// JS
import utils from "./components/_global/js/global.js";
import initComponents from "./component-loader.js";
import "../src/helpers/global-helpers.js";
import "prismjs";

// Swap the `no-js` html class for `js` as early as possible.
utils.browserJS();

// Adding ES module initialisation for components
initComponents();

// CSS
import "./styles/global.scss";
