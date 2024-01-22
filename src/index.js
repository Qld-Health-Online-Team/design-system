// CSS
import "./styles/global.scss";

// JS
import $ from 'jquery';


window.jQuery = window.$ = $;
require('jquery-validation');
require("slick-carousel");
require( 'datatables.net' );
require('prismjs');

import Bloodhound from 'corejs-typeahead/dist/bloodhound.js';
window.Bloodhound = Bloodhound;
require('corejs-typeahead/dist/typeahead.jquery.js');
require('./externals/funnelback.autocompletion-2.6.0.js');
