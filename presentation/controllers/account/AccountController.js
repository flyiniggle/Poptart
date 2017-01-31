const querystring = require('querystring');

const accountService = imports('services/account/AccountService');
const Alert = imports('components/alerts/Alert.js');
const ServerError = imports('support/Error.js');

const AccountController = function() {
	"use strict";
	const self = this;

	self.getAccount = function(req, res) {
		res.render("modules/account/account.ninja");
	};

	self.getAccountData = function(req, res) {
		const service = accountService.getAccount(res, req.params.acct_id);

		service.on("end", processAccountData);
		service.send();
	};

	self.createAccount = function(req, res) {
		const data = querystring.stringify(req.body),
			service = accountService.createAccount(res, data);

		service.on("end", processAccountCreation);
		service.post(data);
	};


	// Request Callbacks
	function processAccountData(res, accountData) {

		var responseData = {},
			alerts = [],
			JSONData, account,
			alertMessage;

		try {
			JSONData = JSON.parse(accountData);
		} catch(e) {
			logging.error("Could not parse data: %s", accountData);
		}

		if(JSONData.error) {
			let serverError = new ServerError(res, JSONData.error);

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

		responseData.account = account;
		responseData.alerts = alerts;

		res.send(responseData);
	}

	function processAccountCreation(res, newAccount) {
		var JSONData;

		try {
			JSONData = JSON.parse(newAccount);
		} catch(e) {
			logging.error("Could not parse data: %s", newAccount);
		}

		if(JSONData.error) {
			let serverError = new ServerError(res, JSONData.error);

			serverError.send(500);
		} else {
			res.end();
		}
	}
};

module.exports = AccountController;