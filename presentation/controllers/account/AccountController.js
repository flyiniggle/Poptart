const accountService = imports('services/account/AccountService');
const securityMonitorService = imports('services/monitors/security/SecurityMonitorService');
const ServiceMarshaller = imports('services/BaseService').ServiceMarshaller;
const Alert = imports('components/alerts/Alert.js');
const ServerError = imports('support/Error.js');

const AccountController = function() {
	"use strict";
	const self = this;

	self.getAccount = function(req, res) {
		res.render("modules/account/server/account.ninja", { id: req.params.acct_id});
	};

	self.getAccountData = function(req, res) {
		const service = accountService.getAccount(res, req.params.acct_id);

		service.on("end", processAccountData);
		service.send();
	};

	self.getAccountHoldings = function(req, res) {
		const holdingsService = accountService.getAccountHoldings(res, req.params.acct_id),
			securityService = securityMonitorService.getSecurities(res),
			marshaller = new ServiceMarshaller(res, [holdingsService, securityService]);

		marshaller.on("end", function(res, data) {
			processAccountHoldings(res, data);
		});
		marshaller.send();
	};

	self.getSecurities = function(req, res) {
		const service = securityMonitorService.getSecurities(res);

		service.on("end", processGetSecurities);
		service.send();
	};

	self.createAccount = function(req, res) {
		const data = JSON.stringify(req.body),
			service = accountService.createAccount(res, data);

		service.on("end", processAccountCreation);
		service.post(data);
	};

	self.saveAccount = function(req) {
		const data = JSON.stringify(req.body),
			service = accountService;

		logging.log(data);
		logging.log(service);
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

	function processAccountHoldings(res, data) {
		var holdingsData,
			securitiesData,
			error;

		try {
			holdingsData = JSON.parse(data[0]);
			securitiesData = JSON.parse(data[1]);
		} catch(e) {
			return logging.error("Could not parse holdings data: %s", data);
		}

		if((error = holdingsData.error) || (error = securitiesData.error)) {
			let serverError = new ServerError(res, error);

			return serverError.send(500);
		}

		holdingsData.map(function(holding) {

			holding.security = securitiesData.find(security => security.pk === holding.security);

			return holding;
		});

		res.send(holdingsData);
	};

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
			res.send(JSONData[0]);
		}
	}

	function processGetSecurities(res, data) {
		var JSONData;

		try {
			JSONData = JSON.parse(data);
		} catch(e) {
			logging.error("Could not parse data: %s", data);
		}

		if(JSONData.error) {
			let serverError = new ServerError(res, JSONData.error);

			serverError.send(500);
		} else {
			res.send(JSONData);
		}
	}
};

module.exports = AccountController;