Poptart.Account.Service = function() {
	var ReturnObj = Object.create(Poptart.Services.service, {});

	ReturnObj.getAccountSummary = function(account) {

		return Promise.resolve(jQuery.ajax({
			type: "GET",
			url: "/account/" + account,
			accept: "application/json",
			contentType: "application/json"
		})).catch(function(e) {
			this.handleServerError(e);
		}.bind(this)).then(function(data) {
			return {
				account: data.accountName,
				description: data.description,
				manager: data.manager,
				client: data.client
			};
		});
	};

	ReturnObj.getAccountHoldings = function() {
		var data = {};

		return data;
	};

	ReturnObj.setAccountHoldings = function() {
		var data = {};

		return data;
	};

	ReturnObj.getAccountAlerts = function() {
		var data = {};

		return data;
	};

	return ReturnObj;
}();