var DashboardService = imports('services/dashboard/DashboardService.js'),
	nunjucks = require('nunjucks');


var DashboardController = function(){
	var self = this,
		dashboardService = new DashboardService();

	self.getDashboardData = function(req, res) {
		var callback;

		callback = function(res) {
			return function(data) {
				var JSONData = JSON.parse(data),
					responseData = {},
					recentAccounts,
					detailsString;

				if(JSONData.active.length > 10){
					detailsString = "and " + (JSONData.active.length - 10) + " more.";
					recentAccounts = JSONData.active.slice(0, 9).join(", ");
					recentAccounts += detailsString
				} else if(JSONData.active.length === 0){
					recentAccounts = "none"
				} else {
					recentAccounts = JSONData.active.join(", ");
				}

				responseData.totalCount = JSONData.total_count;
				responseData.recentAccounts = recentAccounts;
				res.setHeader('Content-Type', 'application/json');
				res.send(responseData);
			};
		};
		dashboardService.getDashboardData(req, callback(res))
	};
};

module.exports = DashboardController;