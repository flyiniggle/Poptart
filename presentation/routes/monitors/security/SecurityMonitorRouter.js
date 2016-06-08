var SecurityMonitorController = imports('controllers/monitors/security/SecurityMonitorController.js');

module.exports = function(express) {
	var router = express.Router(),
		securityMonitorController = new SecurityMonitorController();

	// Middleware
	router.use("/scripts", express.static(loadPath("ui/modules/monitors/security/scripts")));
	router.use("/css", express.static(loadPath("ui/modules/monitors/security/css")));

	router.get('/', securityMonitorController.getSecurities);

	return router;
};