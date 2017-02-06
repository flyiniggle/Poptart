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

	ReturnObj.getAccountHoldings = function(accountId) {
		return Promise.resolve(jQuery.ajax({
			type: "GET",
			url: "/account/" + accountId + "/holdings/",
			accept: "application/json",
			contentType: "application/json"
		})).catch(function(e) {
			this.handleServerError(e);
			return [];
		}.bind(this)).then(function(data) {
			return data.map(function(record) {
				var sec = record.security;

				return {
					CUSIP: sec.CUSIP,
					security: sec.description,
					segment: sec.segment,
					quantity: record.quantity,
					expected_value: record.expected_value,
					expected_quantity: record.expected_quantity,
					last_price: sec.last_price
				};
			});
		}).catch(function(error) {
			return alert(error);
		});
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