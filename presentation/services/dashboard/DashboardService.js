var http = require('http');

var service = imports('services/BaseService.js');

var DashboardService = function(){
	var self = this;

	self.getDashboardData = function(res, module) {
		var options = new self.getBaseRequestOptions(),
			getter;

		options.path = "/" + module + "/summary";
		options.method = "GET";
		options.headers = {Accept: "application:json"};

		getter = new service.Service(options, res);

		return getter;
	}
};

DashboardService.prototype = new service.ServiceFactory();

module.exports = DashboardService;