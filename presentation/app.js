var http = require('http');
var express = require('express');
var app = express();

var RequestOptions = function(){
	return {
		host: "127.0.0.1",
		port: 8000
	};
};

app.get('/account', function(req, res){
	var options = new RequestOptions(),
		request;

	options.path = "/account/";
	options.method = "GET";
	options.headers = {Accept: "application:json"};
	request = http.request(options, function(response){
		response.setEncoding('utf8');
		response.on('data', function(chunk) {
			res.send(chunk);
			console.log(chunk);
		});
		response.on('error', function(e){
			console.log(e.message);
		})
	});
	request.on('error', function(e){
		res.send("An error occurred");
		console.log("An error occurred: %s", e.message);
	});
	request.end();
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