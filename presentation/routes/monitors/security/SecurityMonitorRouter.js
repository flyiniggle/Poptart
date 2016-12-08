var SecurityMonitorController = imports('controllers/monitors/security/SecurityMonitorController.js');

module.exports = function(express) {
	var router = express.Router(),
		securityMonitorController = new SecurityMonitorController();

	// Middleware
	router.get('/', securityMonitorController.getSecurities);

	return router;
};