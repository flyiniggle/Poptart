const ServerError = imports('support/Error.js');
const securityMonitorService = imports('services/monitors/security/securityMonitorService.js');

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
		var securitiesData = JSON.parse(data);

		if(!!securitiesData.error) {
			let serverError = new ServerError(res, data.error);
			return serverError.send(500);
		}

		res.render("modules/monitors/security/securitymonitor.ninja", {securities: JSON.stringify(securitiesData)});
	}
};

module.exports = SecurityMonitorController;