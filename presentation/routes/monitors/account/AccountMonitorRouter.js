var AccountMonitorController = imports('controllers/monitors/account/AccountMonitorController.js');

module.exports = function(express) {
	var router = express.Router(),
		accountMonitorController = new AccountMonitorController();

	// Middleware
	router.get('/', accountMonitorController.getAccounts);
	router.get('/tabledata', accountMonitorController.getAccountsData);
	router.get('/securities', accountMonitorController.getSecuritiesData);

	return router;
};
