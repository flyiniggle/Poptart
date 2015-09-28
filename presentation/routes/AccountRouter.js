var AccountService = require('../services/AccountService.js');

module.exports = function(app) {
	var router = app.Router();

	router.get('/', AccountService.getAccounts);
	router.get('/:acct_id', AccountService.getAccount);

	return router;
};
