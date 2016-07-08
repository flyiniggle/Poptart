var Alert = imports("components/alerts/alert.js");
var ServerError = imports('support/Error.js');
var ServiceMarshaller = imports('services/BaseService.js').ServiceMarshaller;
var accountMonitorService = imports('services/monitors/account/AccountMonitorService.js');
var dashboardService = imports('services/dashboard/DashboardService.js');
var igniteDataAdapter = imports('support/Ignite/DataAdapter.js');

var AccountMonitorController = function(){
	var self = this;

	// Public Methods
	self.getAccounts = function(req, res){
		var summaryRequest = dashboardService.getDashboardData(res, "account"),
			accountsFilter = accountMonitorService.getAccountsParamFormatter(),
			accountsRequest,
			marshaller;

		accountsFilter.fields = ["name", "pk", "holdings_drift", "max_pos_drift", "cash_drift", "max_cash_drift", "total_drift", "max_total_drift"];
		accountsRequest = accountMonitorService.getAccounts(res, accountsFilter);

		marshaller = new ServiceMarshaller(res, [accountsRequest, summaryRequest]);
		marshaller.on("end", function(res, data) {
			processAccounts(res, data[0], data[1]);
		});
		marshaller.send();
	};

	self.getAccountsData = function(req, res){
		var accountsRequest = accountMonitorService.getAccounts(res, igniteDataAdapter.translateServerRequest(req.query));

		accountsRequest.on("end", function(res, data) {
			processAccountData(res, data);
		});
		accountsRequest.send();
	};


	// Request Callbacks
	function processAccounts(res, accountData, summaryData) {
		var templateData = {},
			accountNames = [],
			accountIDs = [],
			alerts = [],
			JSONAccountData = JSON.parse(accountData),
			JSONSummaryData = JSON.parse(summaryData),
			JSONAccountsList = JSONAccountData.accounts_data,
			i, account, alertMessage, serverError;

		if(!!JSONAccountData.error) {
			serverError = new ServerError(res, JSONAccountData.error);
			return serverError.send(500);
		}

		if(!!JSONSummaryData.error) {
			serverError = new ServerError(res, JSONSummaryData.error);
			return serverError.send(500);
		}

		for(i=(JSONAccountsList.length - 1); account=JSONAccountsList[i]; i--) {
			accountNames.push(account.name.toString());
			accountIDs.push(account.pk.toString());
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
		}

		templateData.accountNamesList = JSON.stringify(accountNames);
		templateData.accountIDsList = JSON.stringify(accountIDs);
		templateData.summaryData = JSONSummaryData;
		templateData.alerts = alerts;
		res.render("modules/monitors/account/accountmonitor.ninja", templateData);
	}

	function processAccountData(res, data){
		var JSONAccountData = JSON.parse(data);

		res.send(JSONAccountData);
	}

	/*function processAccountLookup(res, data){

		res.send(data);
	}*/

	// Private Functions

};

module.exports = AccountMonitorController;