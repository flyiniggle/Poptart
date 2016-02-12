const accountService = imports('services/account/AccountService');
const Alert = imports('components/alerts/Alert.js');

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
			alerts = [],
			JSONData, account,
			alertMessage;

		try {
			JSONData = JSON.parse(accountData);
		} catch(e) {
			logging.error("Could not parse data: %s", accountData);
		}

		account = JSONData.account;

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
};

module.exports = AccountController;