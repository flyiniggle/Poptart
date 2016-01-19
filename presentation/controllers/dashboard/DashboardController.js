var DashboardService = imports('services/dashboard/DashboardService.js'),
	nunjucks = require('nunjucks');


var DashboardController = function(){
	var self = this,
		dashboardService = new DashboardService();

	self.getDashboardData = function(req, res) {
		var callback;

		callback = function(res) {
			return function(data) {
				var templateData = {},
					JSONData = JSON.parse(data);

				templateData.accountsCount = JSONData.length;
				res.render("index.html", templateData);
			};
		};
		dashboardService.getDashboardData(req, callback(res))
	};
};

module.exports = DashboardController;