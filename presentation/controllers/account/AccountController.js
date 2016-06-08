const accountService = imports('services/account/AccountService');
const Alert = imports('components/alerts/Alert.js');
const ServerError = imports('support/Error.js');

const AccountController = function(){
	const self = this;

	self.getAccount = function(req, res){
		const service = accountService.getAccount(res, req.params.acct_id);

		service.on("end", processAccount);
		service.send();
	};

	self.createAccount = function(req, res) {
		const service = accountService.createAccount(res);

		service.on("end", processAccountCreation);
		service.post(req.body);
	};


	// Request Callbacks
	function processAccount(res, accountData){
		var templateData = {},
			alerts = [],
			JSONData, account,
			alertMessage, serverError;

		try {
			JSONData = JSON.parse(accountData);
		} catch(e) {
			logging.error("Could not parse data: %s", accountData);
		}

		if(!!JSONData.error) {
			serverError = new ServerError(res, JSONData.error);
			return serverError.send(500);
		}

		account = JSONData[0];

		if(account.holdings_drift > account.max_pos_drift) {
			alertMessage = account.name + " has drifting holdings.";
			alerts.push(new Alert("error", "Holdings Drift", alertMessage));
		}
		if(account.cash_drift > account.max_cash_drift) {
			alertMessage = account.name + " has drifting cash.";
			alerts.push(new Alert("info", "Cash Drift", alertMessage));
		}
		if(account.total_drift > account.max_total_drift) {
			alertMessage = account.name + " is drifting.";
			alerts.push(new Alert("warning", "Drift", alertMessage));
		}

		templateData.account = JSONData.account;
		templateData.holdings = JSONData.holdings;
		templateData.alerts = alerts;

		res.render("modules/account/account.ninja", templateData);
	}

	function processAccountCreation(res, newAccount) {
		var JSONData, serverError;

		try {
			JSONData = JSON.parse(newAccount);
		} catch(e) {
			logging.error("Could not parse data: %s", newAccount);
		}

		if(!!JSONData.error){
			serverError = new ServerError(res, JSONData.error);
			serverError.send(500);
		} else {
			res.end();
		}
	}
};

module.exports = AccountController;