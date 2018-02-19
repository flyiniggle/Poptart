// Poptart.Monitor.Account.CreateAccount.Service
////////////////////////////////
import { AsyncService } from "Poptart/Poptart.Services";


var CreateAccountService = Object.create(AsyncService, {});

const saveAccount = function(data, holdingsData) {
	var payload, mappedHoldingsData;

	mappedHoldingsData = holdingsData.map(function(holding) {
		return {
			id: holding.security.pk,
			quantity: holding.quantity,
			expectedQuantity: holding.expectedQuantity,
			expectedValue: holding.expectedValue
		};
	});

	payload = {
		"accountName": data.accountName,
		"accountDescription": data.accountDescription,
		"startingCash": data.startingCash,
		"expectedCash": data.expectedCash,
		"maxPositionDrift": data.maxPositionDrift,
		"maxCashDrift": data.maxCashDrift,
		"maxTotalDrift": data.maxTotalDrift,
		"holdings": mappedHoldingsData
	};

	return CreateAccountService.promiseMe({
		type: "POST",
		url: "/account/create",
		data: JSON.stringify(payload)
	}).then(function(data) {
		return data.pk;
	});
};

export { saveAccount };