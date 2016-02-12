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
	}
};

module.exports = new AccountService();