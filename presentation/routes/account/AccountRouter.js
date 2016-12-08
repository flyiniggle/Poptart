const AccountController = imports('controllers/account/AccountController.js');

module.exports = function(express) {
	const router = express.Router(),
		accountController = new AccountController();

	// Middleware
	router.get('/create', function(req, res) {
		res.render("modules/monitors/account/createaccount.ninja");
	});

	router.post('/create', accountController.createAccount);

	router.get('/:acct_id', accountController.getAccount);

	return router;
};
