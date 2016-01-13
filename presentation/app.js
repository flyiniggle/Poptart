// Imports
var express = require('express'),
	nunjucks = require('nunjucks'),
	path = require('path'),
	accountRoutes = require('./routes/AccountRouter.js')(express);

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
app.get("/", express.static("./ui/index.html"));
app.use("/index", express.static("./ui/index.html"));
app.use("/account", accountRoutes);

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("I hear you at http://%s:%s", host, port);
});