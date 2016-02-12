const accountService = imports('services/account/AccountService');

const AccountController = function(){
	const self = this;

	self.getAccount = function(req, res){
		const service = accountService.getAccount(res, req.params.acct_id);

		service.on("end", processAccount);
		service.send();
	};


	// Request Callbacks
	function processAccount(res, accountData){
		var templateData = {},
			JSONData;

		try {
			JSONData = JSON.parse(accountData);
		} catch(e) {
			logging.error("Could not parse data: %s", accountData);
		}

		templateData.account = JSON.stringify(JSONData.account);
		templateData.holdings = JSON.stringify(JSONData.holdings);

		res.render("modules/account/account.ninja", templateData);
	}
};

module.exports = AccountController;