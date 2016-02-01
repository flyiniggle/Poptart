var util = require('util');

var Service = imports('services/BaseService.js');

var AccountsService = function(){
	var self = this;

	self.getAccounts = function(res) {
		var getter,
			options ={};

		options.path = "/account/";
		options.method = "GET";
		options.headers = {Accept: "application:json"};
		getter = new Service.Service(options, res);

		return getter;
	};

	self.getAccount = function(res) {
		var options = {},
			acct_id = req.params.acct_id;

		options.path = util.format("/account/%s/", acct_id);
		options.method = "GET";
		options.headers = {Accept: "application:json"};
	};
};

module.exports = AccountsService;

