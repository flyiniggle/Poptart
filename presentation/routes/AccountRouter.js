var AccountController = require('../controllers/account/AccountController.js');

module.exports = function(express) {
	var router = express.Router(),
		accountController = new AccountController();

	// Middleware
	router.use("/scripts", express.static("../ui/modules/account/scripts"));
	router.use("/css", express.static("../ui/modules/account/css"));

	router.get('/', accountController.getAccounts);
	router.get('/:acct_id', accountController.getAccount);

	return router;
};
