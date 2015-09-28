var Service = require('./BaseService.js');
var http = require('http');
var util = require('util');

var AccountsService = new Service();

AccountsService.getAccounts = function(req, res) {
	var options = new AccountsService.getBaseRequestOptions(),
		request;

	options.path = "/account/";
	options.method = "GET";
	options.headers = {Accept: "application:json"};
	request = http.request(options, function(response) {
		response.setEncoding('utf8');
		/*response.on('data', function(chunk) {
		 res.send(chunk);
		 console.log(chunk);
		 });*/
		response.pipe(res);
		response.on('error', function(e) {
			console.log(e.message);
		})
	});
	request.on('error', function(e) {
		res.send("An error occurred");
		console.log("An error occurred: %s", e.message);
	});
	request.end();
};

AccountsService.getAccount= function(req, res) {
	var options = new AccountsService.getBaseRequestOptions(),
		acct_id = req.params.acct_id,
		request;

	options.path = util.format("/account/%s/", acct_id);
	options.method = "GET";
	options.headers = {Accept: "application:json"};
	request = http.request(options, function(response) {
		response.setEncoding('utf8');
		response.on('data', function(chunk) {
			res.send(chunk);
			console.log(chunk);
		})
	}).on('error', function(e) {
		res.send("An error occurred");
		console.log("An error occurred: %s", e.message);
	});
	request.end();
};

module.exports = AccountsService;