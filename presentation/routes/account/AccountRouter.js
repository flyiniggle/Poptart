const AccountController = imports('controllers/account/AccountController.js');

module.exports = function(express) {
	const router = express.Router(),
		accountController = new AccountController();

	// Middleware
	router.use("/scripts", express.static(loadPath("ui/modules/account/scripts")));
	router.use("/css", express.static(loadPath("ui/modules/account/css")));

	router.get('/:acct_id', accountController.getAccount);

	return router;
};
