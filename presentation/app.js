var http = require('http');
var express = require('express');
var app = express();

var AccountService = require('./services/AccountService.js');

app.get('/account', AccountService.getAccounts);

app.get('/account/:acct_id', AccountService.getAccount);

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("I hear you at http://%s:%s", host, port);
});