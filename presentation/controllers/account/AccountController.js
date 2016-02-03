var accountService = imports('services/account/AccountService.js');
var dashboardService = imports('services/dashboard/DashboardService.js');

var AccountController = function(){
	var self = this;

	// Public Methods
	self.getAccounts = function(req, res){
		var accountsRequest = accountService.getAccounts(res),
			summaryRequest = dashboardService.getDashboardData("account", res);

		accountsRequest.on("end", processAccounts);
		accountsRequest.send();
	};

	self.getAccount = function(req, res){
		var service = accountServiceFactory.getAccount(res);

		service.on("end", processAccount);
		service.send();
	};

	// Private Functions
	function processAccounts(res, data) {
		var templateData = {},
			accountNames = [],
			JSONData = JSON.parse(data),
			i;

		for(i = 0; i < JSONData.length; i++) {
			accountNames.push("'" + JSONData[i].name.toString() + "'");
		}

		templateData.data = data;
		templateData.accountNamesList = accountNames;
		res.render("modules/account/templates/monitor.html", templateData);
	}

	function processAccount(data, res) {

	}
};

module.exports = AccountController;