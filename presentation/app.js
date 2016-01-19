global.imports = function(name) {
	return require(__dirname + '/' + name);
};
global.loadPath = function(name) {
	return __dirname + '/' + name;
};

// Imports
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var dashboardRoutes = imports('routes/dashboard/DashboardRouter.js')(express);
var accountRoutes = imports('routes/AccountRouter.js')(express);

// Setup
var app, env;

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
//app.get("/", express.static("./ui/index.html"));
app.use("/", dashboardRoutes);
app.use("/index", dashboardRoutes);
app.use("/account", accountRoutes);

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("I hear you at http://%s:%s", host, port);
});