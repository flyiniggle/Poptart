var AccountService = imports('services/account/AccountService.js');

var AccountController = function(){
	var self = this;

	// Public Methods
	self.getAccounts = function(req, res){
		var service = new AccountService();

		service.on("end", processAccounts);
		service.getAccounts(res);
	};

	self.getAccount = function(req, res){
		var service = new AccountService();

		service.on("end", processAccount);
		service.getAccounts(res);
	};

	// Private Functions
	function processAccounts(data, res) {
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