var AccountService = imports('services/account/AccountService.js');

var AccountController = function(){
	var self = this,
		accountServiceFactory = new AccountService();

	// Public Methods
	self.getAccounts = function(req, res){
		var service = accountServiceFactory.getAccounts(res);

		service.on("end", processAccounts);
		service.send();
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