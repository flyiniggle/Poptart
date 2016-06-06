var qs = require('querystring');
var Service = imports('services/BaseService.js');

var AccountsMonitorService = function(){
	var self = this;

	self.getAccounts = function(res, params) {
		var path = '/account/',
			queryString = (params) ? qs.stringify(params) : "",
			getter,
			options = {};

		if(params){
			path += `?${queryString}`;
		}

		options.path = path;
		options.method = "GET";
		options.headers = {Accept: "application:json"};
		getter = new Service.Service(options, res);

		return getter;
	};

	self.getAccountsParamFormatter = function() {
		return {
			fields: [],
			current_page: undefined,
			page_size: undefined
		}
	};
};

module.exports = new AccountsMonitorService();

