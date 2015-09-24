var http = require('http');
var express = require('express');
var app = express();

var options = {
	host: "127.0.0.1",
	port: 8000
};

app.get('/account', function(req, res){

	http.get("http://127.0.0.1:8000/account/", function(response){
		response.setEncoding('utf8');
		response.on('data', function(chunk) {
			res.send(chunk);
			console.log(chunk);
		})
	}).on('error', function(e){
		res.send("An error occurred");
		console.log("An error occurred: %s", e.message);
	});
});

app.get('/account/:acct_id', function(req, res) {
	var acct_id = req.params.acct_id,
		URL = "http://127.0.0.1:8000/account/" + acct_id + "/";
	http.get(URL, function(response) {
		response.setEncoding('utf8');
		response.on('data', function(chunk) {
			res.send(chunk);
			console.log(chunk);
		})
	}).on('error', function(e) {
		res.send("An error occurred");
		console.log("An error occurred: %s", e.message);
	});
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("I hear you at http://%s:%s", host, port);
});