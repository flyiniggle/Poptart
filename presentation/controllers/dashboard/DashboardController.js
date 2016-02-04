var ServiceMarshaller = imports('services/BaseService.js').ServiceMarshaller;
var Alert = imports("common/alerts/Alert.js");

var dashboardService = imports('services/dashboard/DashboardService.js');
var accountService = imports('services/account/AccountService.js');

var DashboardController = function(){
	var self = this;

	/// Public Methods
	self.getAccountDashboardData = function(req, res) {
		var dashboardRequest = dashboardService.getDashboardData(res, "account"),
			accountRequest = accountService.getAccounts(res),
			marshaller = new ServiceMarshaller(res, [dashboardRequest, accountRequest]);

		marshaller.on("end", function(res, data){
			processAccountDashboardData(res, data[0], data[1]);
		});
		marshaller.send();
	};

	self.getSecuritiesDashboardData = function(req, res){
		var request = dashboardService.getDashboardData(res, "securities");

		request.on("end", processSecuritiesDashboardData);
		request.send();
	};


	// Private Functions
	function processAccountDashboardData(res, summaryData, accountsData) {
		var JSONAccountsData,
			JSONSummaryData,
			responseData = {},
			recentAccounts,
			detailsString,
			alertMessage,
			alerts = [],
			account, i;

		try {
			JSONAccountsData = JSON.parse(accountsData);
			JSONSummaryData = JSON.parse(summaryData);
		} catch(e) {
			logging.error("Could not parse to JSON: %s, %s", accountsData, summaryData);
			res.send(e);
			return
		}

		if(JSONSummaryData.active.length > 10) {
			detailsString = "and " + (JSONSummaryData.active.length - 10) + " more.";
			recentAccounts = JSONSummaryData.active.slice(0, 9).join(", ");
			recentAccounts += detailsString
		} else if(JSONSummaryData.active.length === 0) {
			recentAccounts = "none"
		} else {
			recentAccounts = JSONSummaryData.active.join(", ");
		}

		for(i=(JSONAccountsData.length-1); account=JSONAccountsData[i]; i--){
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

		responseData.totalCount = JSONSummaryData.total_count;
		responseData.recentAccounts = recentAccounts;
		responseData.alerts = alerts;

		res.setHeader('Content-Type', 'application/json');
		res.send(responseData);
	}

	function processSecuritiesDashboardData(res, data) {
		res.setHeader('Content-Type', 'application/json');
		res.send({totalCount: JSON.parse(data).total_count});
	}
};

module.exports = DashboardController;