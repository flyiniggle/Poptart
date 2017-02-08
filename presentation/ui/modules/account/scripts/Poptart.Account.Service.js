Poptart.Account.Service = function() {
	"use strict";
	var ReturnObj = Object.create(Poptart.Services.Service, {});

	ReturnObj.SummaryService = Object.create(Poptart.Services.AsyncService, {});
	ReturnObj.SummaryService.get = function(accountId) {

		return this.makeRequest({
			url: "/account/" + accountId + "/data"
		}).then(function(data) {
			data = data.account;
			return {
				account: data.name,
				description: data.description,
				manager: data.manager,
				client: data.client_1_id
			};
		}).catch(function(error) {
			return alert(error);
		});
	};

	ReturnObj.HoldingsService = Object.create(Poptart.Services.AsyncService, {});
	ReturnObj.HoldingsService.get = function(accountId) {
		return this.makeRequest({
			url: "/account/" + accountId + "/holdings"
		}).then(function(data) {
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

	ReturnObj.HoldingsService.set = function() {

		return {};
	};

	ReturnObj.AlertsService = Object.create(Poptart.Services.AsyncService, {});
	ReturnObj.AlertsService.get = function(accountId) {

		return this.makeRequest({
			url: "/account/" + accountId + "/data"
		}).then(function(data) {
			return data.alerts;
		}).catch(function(error) {
			return alert(error);
		});
	};

	return ReturnObj;
}();