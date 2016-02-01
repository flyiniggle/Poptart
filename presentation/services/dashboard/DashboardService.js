var http = require('http');

var Service = imports('services/BaseService.js');

var DashboardService = function(){
	var self = this;

	self.getDashboardData = function(res, module) {
		var options = {},
			getter;

		options.path = "/" + module + "/summary";
		options.method = "GET";
		options.headers = {Accept: "application:json"};

		getter = new Service(options, res);

		return getter;
	}
};

module.exports = DashboardService;