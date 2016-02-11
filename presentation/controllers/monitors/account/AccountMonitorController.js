var Alert = imports("components/alerts/alert.js");
var ServiceMarshaller = imports('services/BaseService.js').ServiceMarshaller;
var accountService = imports('services/monitors/account/AccountMonitorService.js');
var dashboardService = imports('services/dashboard/DashboardService.js');

var AccountController = function(){
	var self = this,
		completeAccountData;

	// Public Methods
	self.getAccounts = function(req, res){
		var summaryRequest = dashboardService.getDashboardData(res, "account"),
			marshaller,
			accountsRequest;

		if(!completeAccountData){
			accountsRequest = accountService.getAccounts(res);
			marshaller = new ServiceMarshaller(res, [accountsRequest, summaryRequest]);
			marshaller.on("end", function(res, data) {
				processAccounts(res, data[0], data[1]);
			});
			marshaller.send();
		} else {
			summaryRequest.on("end", function(res, data){
				processAccounts(res, null, data)
			});
			summaryRequest.send();
		}
	};

	self.getAccount = function(req, res){
		var service = accountService.getAccount(res, req.params.acc_id);

		service.on("end", processAccount);
		service.send();
	};


	// Request Callbacks
	function processAccounts(res, accountData, summaryData) {
		var templateData = {},
			accountNames = [],
			accountIDs = [],
			alerts = [],
			JSONAccountData = (!!accountData) ? JSON.parse(accountData) : completeAccountData,
			JSONSummaryData = JSON.parse(summaryData),
			i, account, alertMessage;

		if(!completeAccountData){
			completeAccountData = JSONAccountData;
		}

		for(i = (JSONAccountData.length - 1); account = JSONAccountData[i]; i--) {
			accountNames.push(JSONAccountData[i].name.toString());
			accountIDs.push(JSONAccountData[i].pk.toString());
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

		templateData.data = JSON.stringify(completeAccountData);
		templateData.accountNamesList = JSON.stringify(accountNames);
		templateData.accountIDsList = JSON.stringify(accountIDs);
		templateData.summaryData = JSONSummaryData;
		templateData.alerts = alerts;
		res.render("modules/monitors/account/accountmonitor.ninja", templateData);
	}

	function processAccount(data, res) {

	}

	function processAccountLookup(res, data){

		res.send(data);
	}

	// Private Functions

};

module.exports = AccountController;