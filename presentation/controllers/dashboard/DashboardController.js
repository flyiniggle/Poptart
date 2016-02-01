var ServiceMarshaller = imports('services/BaseService.js').ServiceMarshaller

var DashboardService = imports('services/dashboard/DashboardService.js');
var AccountService = imports('services/account/AccountService.js');

var DashboardController = function(){
	var self = this,
		dashboardServiceFactory = new DashboardService(),
		accountServiceFactory = new AccountService();

	/// Public Methods
	self.getAccountDashboardData = function(req, res) {
		var dashboardService = dashboardServiceFactory.getDashboardData(res, "account"),
			accountService = accountServiceFactory.getAccounts(res),
			marshaller;

		marshaller = new ServiceMarshaller([accountService, dashboardService]);
		marshaller.on("end", function(data){
			processAccountDashboardData(res, data[0], data[1]);
		});
		marshaller.send();

	};

	self.getSecuritiesDashboardData = function(req, res){
		var service = dashboardServiceFactory.getDashboardData(res, "securities");

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

		if(JSONAlertsData.active.length > 10) {
			detailsString = "and " + (JSONAlertsData.active.length - 10) + " more.";
			recentAccounts = JSONAlertsData.active.slice(0, 9).join(", ");
			recentAccounts += detailsString
		} else if(JSONAlertsData.active.length === 0) {
			recentAccounts = "none"
		} else {
			recentAccounts = JSONAlertsData.active.join(", ");
		}

		for(i=(JSONAccountsData.length-1); account=JSONAccountsData[i]; i--){
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

		responseData.totalCount = JSONAlertsData.total_count;
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