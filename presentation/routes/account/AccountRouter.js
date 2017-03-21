const AccountController = imports('controllers/account/AccountController.js');

module.exports = function(express) {
	const router = express.Router(),
		accountController = new AccountController();

	// Middleware
	router.get('/create', function(req, res) {
		res.render("modules/monitors/account/createaccount.ninja");
	});

	router.get('/test/test1', function(req, res) {
		res.render("modules/account/accounttest1.ninja");
	});

	router.get('/test/test1/data', accountController.getTest1);

	router.post('/create', accountController.createAccount);

	router.get('/securities', accountController.getSecurities);

	router.get('/:acct_id', accountController.getAccount);

	router.post('/:acct_id', accountController.saveAccount);

	router.get('/:acct_id/data', accountController.getAccountData);

	router.get('/:acct_id/holdings', accountController.getAccountHoldings);

	return router;
};
