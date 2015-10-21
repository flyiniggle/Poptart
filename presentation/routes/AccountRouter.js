var AccountService = require('../services/AccountService.js');

module.exports = function(express) {
	var router = express.Router();

	// Middleware
	router.use("/scripts", express.static("../ui/modules/account/scripts"));
	router.use("/css", express.static("../ui/modules/account/css"));

	router.get('/', AccountService.getAccounts);
	router.get('/:acct_id', AccountService.getAccount);

	return router;
};
