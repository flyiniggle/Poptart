var Service = imports('services/BaseService.js');

var AccountsMonitorService = function(){
	var self = this;

	self.getAccounts = function(res) {
		var getter,
			options ={};

		options.path = "/account/";
		options.method = "GET";
		options.headers = {Accept: "application:json"};
		getter = new Service.Service(options, res);

		return getter;
	};
};

module.exports = new AccountsMonitorService();

