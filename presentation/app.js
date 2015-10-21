var express = require('express');
var app = express();

var accountRoutes = require('./routes/AccountRouter.js')(express);

// Routes for static files
app.use("/scripts", express.static("./ui/scripts"));
app.use("/scripts", express.static("./ui/css"));

// Routes for modules
app.use("/index", express.static("./ui/index.html"));
app.use("/account", accountRoutes);

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("I hear you at http://%s:%s", host, port);
});