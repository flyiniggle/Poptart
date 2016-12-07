global.imports = function(name) {
	return require(__dirname + '/' + name);
};
global.loadPath = function(name) {
	return __dirname + '/' + name;
};
global.logging = undefined;

// Imports
var path = require('path');

var express = require('express');
var bodyParser = require("body-parser");
var nunjucks = require('nunjucks');
var winston = require('winston');

var config = imports("config/config.js");
var dashboardRoutes = imports('routes/dashboard/DashboardRouter.js')(express);
var accountMonitorRoutes = imports('routes/monitors/account/AccountMonitorRouter.js')(express);
var securityMonitorRoutes = imports('routes/monitors/security/SecurityMonitorRouter.js')(express);
var accountRoutes = imports('routes/account/AccountRouter.js')(express);

// Logging
global.logging = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			handleExceptions: true,
			humanReadableUnhandledException: true
		}),
		new (winston.transports.File)({
			name: 'info-file',
			level: 'info',
			filename: loadPath('logs/info.log')
		}),
		new (winston.transports.File)({
			name: 'error-file',
			level: 'error',
			filename: loadPath('logs/error.log')
		})
	],
	exceptionHandlers: [
		new winston.transports.File({
			name: 'unhandled-exceptions-file',
			filename: loadPath('logs/exceptions.log'),
			humanReadableUnhandledException: true
		})
	],
	exitOnError: false
});

// Setup
var app = express();

app.set('view engine', 'nunjucks');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));

nunjucks.configure(path.join(__dirname, "templates"), {
	express: app,
	autoescape: true,
	watch: true
});

// Routes for static files
app.use("/components", express.static(path.join(__dirname, "static", "ui", "components")));
app.use("/scripts", express.static(path.join(__dirname, "static", "ui", "scripts")));
app.use("/css", express.static(path.join(__dirname, "static", "ui", "css")));
app.use("/templates", express.static(path.join(__dirname, "templates")));
app.use("/poptart.min.js", express.static(path.join(__dirname, "static", "ui", "poptart.js")));

// Routes for modules
app.use("/", dashboardRoutes);
app.use("/index", dashboardRoutes);
app.use("/monitors/account", accountMonitorRoutes);
app.use("/monitors/security", securityMonitorRoutes);
app.use("/account", accountRoutes);

app.listen(config.presentation.port, function() {
	var host = "localhost",
		port = config.presentation.port;

	console.log("I hear you at http://%s:%d", host, port); // eslint-disable-line no-console
});