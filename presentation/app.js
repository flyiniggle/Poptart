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
var nunjucks = require('nunjucks');
var winston = require('winston');

var config = imports("config/config.js");
var dashboardRoutes = imports('routes/dashboard/DashboardRouter.js')(express);
var accountRoutes = imports('routes/account/AccountRouter.js')(express);

// Logging
global.logging = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
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
	]
});

// Setup
var app, env, server;

app = express();
app.set('view engine', 'nunjucks');

env = nunjucks.configure(path.join(__dirname, "ui"), {
	express: app,
	autoescape: true
});

// Routes for static files
app.use("/scripts", express.static(path.join(__dirname, "ui", "scripts")));
app.use("/modules", express.static(path.join(__dirname, "ui", "modules")));
app.use("/css", express.static(path.join(__dirname, "ui", "css")));

// Routes for modules
app.use("/", dashboardRoutes);
app.use("/index", dashboardRoutes);
app.use("/account", accountRoutes);

server = app.listen(config.presentation.port, function(){
	var host = "localhost",
		port = config.presentation.port;

	console.log("I hear you at http://%s:%d", host, port);
});