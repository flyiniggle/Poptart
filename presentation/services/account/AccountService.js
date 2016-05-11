const util = require('util');

const Service = imports('services/BaseService.js');

const AccountService = function(){
	var self = this;

	self.getAccount = function(res, acct){
		var options = {},
			getter;

		options.path = util.format("/account/%s/", acct);
		options.method = "GET";
		options.headers = {Accept: "application:json"};

		getter = new Service.Service(options, res);

		return getter;
	};

	self.createAccount = function(res) {
		var options = {},
			getter;

		options.path = "/account/";
		options.method = "POST";
		options.headers = {
			"accept": "application/json",
			"content-type": "application/json"
		};

		getter = new Service.Service(options, res);

		return getter;
	}
};

module.exports = new AccountService();