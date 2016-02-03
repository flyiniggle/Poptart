var ServiceMarshaller = imports('services/BaseService.js').ServiceMarshaller;
var accountService = imports('services/account/AccountService.js');
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
		var service = accountService.getAccount(res);

		service.on("end", processAccount);
		service.send();
	};


	// Request Callbacks
	function processAccounts(res, accountData, summaryData) {
		var templateData = {},
			accountNames = [],
			accountIDs = [],
			JSONAccountData = (!!accountData) ? JSON.parse(accountData) : completeAccountData,
			JSONSummaryData = JSON.parse(summaryData),
			i;

		if(!completeAccountData){
			completeAccountData = JSONAccountData;
		}

		for(i = 0; i < JSONAccountData.length; i++) {
			accountNames.push(JSONAccountData[i].name.toString());
			accountIDs.push(JSONAccountData[i].pk.toString());
		}

		templateData.data = JSON.stringify(completeAccountData);
		templateData.accountNamesList = JSON.stringify(accountNames);
		templateData.accountIDsList = JSON.stringify(accountIDs);
		templateData.summaryData = JSON.stringify(JSONSummaryData);
		res.render("modules/account/templates/monitor.html", templateData);
	}

	function processAccount(data, res) {

	}

	function processAccountLookup(res, data){

		res.send(data);
	}

	// Private Functions

};

module.exports = AccountController;