var util = require('util');

var service = imports('services/BaseService.js');

var AccountsService = function(){
	var self = this;

	self.getAccounts = function(res) {
		var getter,
			options = self.getBaseRequestOptions();

		options.path = "/account/";
		options.method = "GET";
		options.headers = {Accept: "application:json"};
		getter = new service.Service(options, res);

		return getter;
	};

	self.getAccount = function(res) {
		var options = new self.getBaseRequestOptions(),
			acct_id = req.params.acct_id;

		options.path = util.format("/account/%s/", acct_id);
		options.method = "GET";
		options.headers = {Accept: "application:json"};
	};
};

AccountsService.prototype = new service.ServiceFactory();

module.exports = AccountsService;

