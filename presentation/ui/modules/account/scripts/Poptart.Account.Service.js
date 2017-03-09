Poptart.Account.Service = function() {
	"use strict";
	var ReturnObj = Object.create(Poptart.Services.Service, {});

	ReturnObj.SummaryService = Object.create(Poptart.Services.AsyncService, {});
	ReturnObj.SummaryService.get = function(accountId) {

		return this.promiseMe({
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
		return this.promiseMeACache({
			url: "/account/" + accountId + "/holdings"
		}).then(function(data) {
			return data.map(function(record) {
				var sec = record.security;

				return {
					pk: record.pk,
					CUSIP: sec.CUSIP,
					ticker: sec.ticker,
					security: sec.description,
					segment: sec.segment,
					quantity: record.quantity,
					expectedValue: record.expected_value,
					expectedQuantity: record.expected_quantity,
					lastPrice: sec.last_price
				};
			});
		}).catch(function(error) {
			return alert(error);
		});
	};

	ReturnObj.HoldingsService.set = function(accountId, data) {

		return this.promiseMe({
			url: "/account/" + accountId,
			type: "POST",
			data: JSON.stringify(data)
		}).then(function(data) {
			return data;
		}).catch(function(error) {
			return alert(error);
		});
	};

	ReturnObj.SecuritiesService = Object.create(Poptart.Services.AsyncService, {});
	ReturnObj.SecuritiesService.get = function() {
		return this.promiseMeACache({
			url: "/account/securities"
		}).then(function(data) {
			return data.map(function(sec) {

				return {
					pk: sec.pk,
					CUSIP: sec.CUSIP,
					ticker: sec.ticker,
					security: sec.description,
					segment: sec.segment,
					lastPrice: sec.last_price
				};
			});
		}).catch(function(error) {
			return alert(error);
		});
	};

	ReturnObj.AlertsService = Object.create(Poptart.Services.AsyncService, {});
	ReturnObj.AlertsService.get = function(accountId) {

		return this.promiseMe({
			url: "/account/" + accountId + "/data"
		}).then(function(data) {
			return data.alerts;
		}).catch(function(error) {
			return alert(error);
		});
	};

	return ReturnObj;
}();