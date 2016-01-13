var AccountService = require('../../services/AccountService.js'),
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
					accountNames.push(JSONData[i].name.toString());
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
		var callback,
			gridType = req.params.grid_type;

		callback = function(res){
			return function(data) {
				if(gridType === "ignite"){
					res.render("modules/account/templates/monitor.html", JSON.parse(data));
				} else if(gridType === "jqWidgets"){
					res.render("modules/account/templates/jqWidgetMonitor.html", JSON.parse(data));
				}
			};
		};

		accountService.getAccounts(res, callback(res));
	}
};

module.exports = AccountController;