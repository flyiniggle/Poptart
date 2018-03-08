// Poptart.Account.Service
////////////////////////////////
import { AsyncService } from "Poptart/Poptart.Services";


const SummaryService = Object.create(AsyncService, {});

SummaryService.get = function(accountId) {
	return this.promiseMe({
		url: `/account/${accountId}/data`
	}).then(function(data = {}) {
		data = data.account || {};
		return {
			account: data.name || "not available",
			description: data.description || "",
			manager: data.manager || "not available",
			client: data.client_1_id || "not available"
		};
	}).catch(function(error) {
		return alert(error);
	});
}.bind(SummaryService);


const HoldingsService = Object.create(AsyncService, {});

HoldingsService.get = function(accountId) {
	return this.promiseMeACache({
		url: `/account/${accountId}/holdings`
	})
	.then(HoldingsService.formatResponse)
	.catch(function(error) {
		return alert(error);
	});
}.bind(HoldingsService);

HoldingsService.set = function(accountId, data) {
	return this.promiseMe({
		url: `/account/${accountId}`,
		type: "POST",
		data: JSON.stringify(data)
	}).then(function(data) {
		return data;
	}).catch(function(error) {
		return alert(error);
	});
}.bind(HoldingsService);

HoldingsService.formatResponse = function(data = []) {
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
};


const SecuritiesService = Object.create(AsyncService, {});

SecuritiesService.get = function() {
	return this.promiseMeACache({
		url: "/account/securities"
	})
	.then(SecuritiesService.formatResponse)
	.catch(function(error) {
		return alert(error);
	});
}.bind(SecuritiesService);

SecuritiesService.formatResponse = function(data = []) {
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
};

const AlertsService = Object.create(AsyncService, {});

AlertsService.get = function(accountId) {

	return this.promiseMe({
		url: `/account/${accountId}/data`
	})
	.then(data => data.alerts)
	.catch(error => alert(error));

}.bind(AlertsService);

export {
	SummaryService,
	HoldingsService,
	AlertsService,
	SecuritiesService
};