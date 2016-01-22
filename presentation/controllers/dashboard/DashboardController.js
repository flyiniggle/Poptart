var DashboardService = imports('services/dashboard/DashboardService.js');

var DashboardController = function(){
	var self = this;

	/// Public Methods
	self.getDashboardData = function(req, res) {
		var service = new DashboardService();

		service.on("end", processDashboardData);
		service.getDashboardData(res, "account");
	};

	self.getSecuritiesDashboardData = function(req, res){
		var service = new DashboardService();

		service.on("end", processSecuritiesDashboardData);
		service.getDashboardData(res, "securities");
	};

	// Private Functions
	function processDashboardData(res, data) {
		var JSONData,
			responseData = {},
			recentAccounts,
			detailsString;
		try {
			JSONData = JSON.parse(data);
		} catch(e) {
			logging.error("Could not parse to JSON: %s", data);
			return res.send(e);
		}

		if(JSONData.active.length > 10) {
			detailsString = "and " + (JSONData.active.length - 10) + " more.";
			recentAccounts = JSONData.active.slice(0, 9).join(", ");
			recentAccounts += detailsString
		} else
			if(JSONData.active.length === 0) {
				recentAccounts = "none"
			} else {
				recentAccounts = JSONData.active.join(", ");
			}

		responseData.totalCount = JSONData.total_count;
		responseData.recentAccounts = recentAccounts;
		res.setHeader('Content-Type', 'application/json');
		res.send(responseData);
	}

	function processSecuritiesDashboardData(res, data) {
		res.setHeader('Content-Type', 'application/json');
		res.send({totalCount: JSON.parse(data).total_count});
	}

};

module.exports = DashboardController;