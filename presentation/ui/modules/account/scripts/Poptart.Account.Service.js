Poptart.Account.Service = function() {
	"use strict";
	var ReturnObj = Object.create(Poptart.Services.service, {});

	ReturnObj.getAccountSummary = function(accountId) {

		return Promise.resolve(jQuery.ajax({
			type: "GET",
			url: "/account/" + accountId + "/data",
			accept: "application/json",
			contentType: "application/json"
		})).catch(function(e) {
			this.handleServerError(e);
			return {
				account: "",
				description: "",
				manager: "",
				client: ""
			};
		}.bind(this)).then(function(data) {
			data = data.account;
			return {
				account: data.name,
				description: data.description,
				manager: data.manager,
				client: data.client_1_id
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