var http = require('http');

var Service = imports('services/BaseService.js');

var DashboardService = function(){
	var self = this;

	self.getDashboardData = function(res, module){
		var options = new self.getBaseRequestOptions(),
			data = "",
			request;
		options.path = "/" + module + "/summary";
		options.method = "GET";
		options.headers = {Accept: "application:json"};
		request = http.request(options, function(response) {
			response.setEncoding('utf8');
			response.on("data", function(chunk) {
				data += chunk;
			});
			response.on('end', function() {
				self.emit('end', res, data);
				logging.info(data);
			});
			response.on('error', function(e) {
				self.emit('error', res, e);
				logging.error(e.message);
			});
		});
		request.on('error', function(e) {
			res.send("An error occurred");
			logging.error("An error occurred: %s", e.message);
		});
		request.end();

		return request;
	};
};

DashboardService.prototype = new Service();

module.exports = DashboardService;