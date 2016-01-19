var AccountService = imports('services/AccountService.js'),
	nunjucks = require('nunjucks'),
	fs = require('fs');

var AccountController = function(){
	var self = this,
		accountService = new AccountService();

	self.getAccounts = function(req, res){
		var callback;

		callback = function(res){
			return function(data) {
				var templateData = {},
					accountNames = [],
					JSONData = JSON.parse(data),
					i;

				for(i = 0; i<JSONData.length; i++){
					accountNames.push("'" + JSONData[i].name.toString() + "'");
				}

				templateData.data = data;
				templateData.accountNamesList = accountNames;
				res.render("modules/account/templates/monitor.html", templateData);
			};
		};

		accountService.getAccounts(res, callback(res));
	};

	self.getAccount = function(req, res){
		var data = accountService.getAccount(req, res);
		return data;
	};

	self.getGrids = function(req, res){
		return function(res){
			return function(data) {
				res.render("modules/account/templates/monitor.html", data);
			};
		};

		accountService.getAccounts(res, callback(res));
	}
};

module.exports = AccountController;