const ServerError = imports('support/Error.js');
const securityMonitorService = imports('services/monitors/security/securityMonitorService.js');
const paramQueryDataAdapter = imports('support/ParamQuery/DataAdapter.js');

const SecurityMonitorController = function() {
	var self = this;

	// Public Methods
	self.getSecurities = function(req, res) {
		var securitiesRequest = securityMonitorService.getSecurities(req, res);

		securitiesRequest.on("end", function(res, data){
			processSecurities(res, data);
		});
		securitiesRequest.send();
	};

	// Request Callbacks
	function processSecurities(res, data){
		var securitiesData = JSON.parse(data),
			serverError;

		if(!!securitiesData.error) {
			serverError = new ServerError(res, data.error);
			return serverError.send(500);
		}

		res.send(data);
	}
};

module.exports = SecurityMonitorController;