var AccountMonitorController = imports('controllers/monitors/account/AccountMonitorController.js');

module.exports = function(express) {
	var router = express.Router(),
		accountMonitorController = new AccountMonitorController();

	// Middleware
	router.use("/scripts", express.static(loadPath("ui/modules/monitors/account/scripts")));
	router.use("/css", express.static(loadPath("ui/modules/monitors/account/css")));

	router.get('/', accountMonitorController.getAccounts);
	router.get('/:acct_id', accountMonitorController.getAccount);

	return router;
};
