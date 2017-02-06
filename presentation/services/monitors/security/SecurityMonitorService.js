const Service = imports('services/BaseService.js');

const SecurityMonitorService = function() {
	const self = this;

	self.getSecurities = function(res) {
		var getter,
			options = {};

		options.path = '/securities/';
		options.method = "GET";
		options.headers = {Accept: "application:json"};
		getter = new Service.Service(options, res);

		return getter;
	};
};

module.exports = new SecurityMonitorService();