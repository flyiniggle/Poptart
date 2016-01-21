var Service = imports('services/BaseService.js');
var http = require('http');

var DashboardService = function(){
	var self = this;

	self.getDashboardData = function(res, callback, module){
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
				callback(data);
				logging.info(data);
				logging.error(data);
			});
			response.on('error', function(e) {
				logging.error(e.message);
			});
		});
		request.on('error', function(e) {
			res.send("An error occurred");
			console.log("An error occurred: %s", e.message);
		});
		request.end();

		return request;
	};
};

DashboardService.prototype = new Service();

module.exports = DashboardService;