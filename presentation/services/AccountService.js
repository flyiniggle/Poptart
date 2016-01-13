var Service = require('./BaseService.js');
var http = require('http');
var util = require('util');

var AccountsService = function(){
	var self = this;

	self.getAccounts = function(res, callback) {
		var options = self.getBaseRequestOptions(),
			data = "",
			request;

		options.path = "/account/";
		options.method = "GET";
		options.headers = {Accept: "application:json"};
		request = http.request(options, function(response) {
			response.setEncoding('utf8');
			response.on("data", function(chunk){
				data += chunk;
			});
			response.on('end', function() {
				callback(data);
			});
			response.on('error', function(e) {
				console.log(e.message);
			});
		});
		request.on('error', function(e) {
			res.send("An error occurred");
			console.log("An error occurred: %s", e.message);
		});
		request.end();

		return request;
	};

	self.getAccount = function(req, res) {
		var options = new self.getBaseRequestOptions(),
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
};

AccountsService.prototype = new Service();

module.exports = AccountsService;