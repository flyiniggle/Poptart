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
				res.render("modules/account/templates/monitor.html", data);
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
					res.render("modules/account/templates/monitor.html", data);
				} else if(gridType === "treegrid"){
					fs.writeFile("ui/modules/account/data/grid.xml", nunjucks.render("modules/account/templates/TreeGridTemplate.xml", {data: JSON.parse(data.data)}));
					res.render("modules/account/templates/TreeGridMonitor.html", {data: fs.readFileSync("ui/modules/account/data/grid.xml", "utf8").replace(/\r?\n|\r/g, "")});
				} else if(gridType === "jqWidgets"){
					res.render("modules/account/templates/jqWidgetMonitor.vm", data);
				}
			};
		};

		accountService.getAccounts(res, callback(res));
	}
};

module.exports = AccountController;