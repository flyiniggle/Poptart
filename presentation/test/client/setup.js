require('jsdom-global')();
const jQuery = require("jquery");
global.igRoot = jQuery;
global.jQuery = jQuery;
const jQueryUI = require("jqueryui");
