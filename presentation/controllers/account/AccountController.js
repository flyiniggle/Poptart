var AccountService = require('../../services/AccountService.js');

var AccountController = function(){
	var self = this,
		accountService = new AccountService();

	self.getAccounts = function(req, res){
		var callback;

		callback = function(res){
			return function(data) {
				res.render("modules/account/templates/monitor.html", data);
			};
		};

		accountService.getAccounts(res, callback(res));
	};

	self.getAccount = function(req, res){
		var data = accountService.getAccount(req, res);
		return data;
	};
};

module.exports = AccountController;