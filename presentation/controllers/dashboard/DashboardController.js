var DashboardService = imports('services/dashboard/DashboardService.js');
var AccountService = imports('services/account/AccountService.js');

var DashboardController = function(){
	var self = this,
		dashboardService = new DashboardService(),
		accountService = new AccountService();

	/// Public Methods
	self.getAccountDashboardData = function(req, res) {
		var dashboardGetter = dashboardService.getDashboardData(res, "account"),
			accountGetter = accountService.getAccounts(res),
			accountsData = null,
			alertsData = null;

		dashboardGetter.on("end", function(res, data) {
			accountsData = data;
			if(accountsData && alertsData) {
				processAccountDashboardData(res, accountsData, alertsData);
			}
		});
		accountGetter.on("end", function(res, data){
			alertsData = data;
			if(accountsData && alertsData){
				processAccountDashboardData(res, accountsData, alertsData);
			}
		});
		dashboardGetter.send();
		accountGetter.send();
	};

	self.getSecuritiesDashboardData = function(req, res){
		var service = dashboardService.getDashboardData(res, "securities");

		service.on("end", processSecuritiesDashboardData);
		service.send();
	};


	// Private Functions
	function processAccountDashboardData(res, accountsData, alertsData) {
		var JSONAccountsData,
			JSONAlertsData,
			responseData = {},
			recentAccounts,
			detailsString,
			highHoldingsDrift = [],
			highCashDrift = [],
			highTotalDrift = [],
			account, i;

		try {
			JSONAccountsData = JSON.parse(accountsData);
			JSONAlertsData = JSON.parse(alertsData);
		} catch(e) {
			logging.error("Could not parse to JSON: %s, %s", accountsData, alertsData);
			res.send(e);
			return
		}

		if(JSONAccountsData.active.length > 10) {
			detailsString = "and " + (JSONAccountsData.active.length - 10) + " more.";
			recentAccounts = JSONAccountsData.active.slice(0, 9).join(", ");
			recentAccounts += detailsString
		} else if(JSONAccountsData.active.length === 0) {
			recentAccounts = "none"
		} else {
			recentAccounts = JSONAccountsData.active.join(", ");
		}

		for(i=(JSONAlertsData.length-1); account= JSONAlertsData[i]; i--){
			if(account.holdings_drift > account.max_pos_drift) {
				highHoldingsDrift.push(account.name);
			}
			if(account.cash_drift > account.max_cash_drift) {
				highCashDrift.push(account.name);
			}
			if(account.total_drift > account.max_total_drift) {
				highTotalDrift.push(account.name);
			}
		}

		responseData.totalCount = JSONAccountsData.total_count;
		responseData.recentAccounts = recentAccounts;
		responseData.highHoldingsDriftCount = highHoldingsDrift.length;
		responseData.highCashDriftCount = highCashDrift.length;
		responseData.highTotalDriftCount = highTotalDrift.length;

		res.setHeader('Content-Type', 'application/json');
		res.send(responseData);
	}

	function processSecuritiesDashboardData(res, data) {
		res.setHeader('Content-Type', 'application/json');
		res.send({totalCount: JSON.parse(data).total_count});
	}
};

module.exports = DashboardController;