const html = `
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
		</head>
		<body></body>
	</html>`;

require('jsdom-global')(html, { pretendToBeVisual: true });
const jQuery = require("jquery");
global.igRoot = jQuery;
global.jQuery = jQuery;
global.$ = jQuery;
const jQueryUI = require("jqueryui");
global.MSApp = {
	execUnsafeLocalFunction: func => func()
};