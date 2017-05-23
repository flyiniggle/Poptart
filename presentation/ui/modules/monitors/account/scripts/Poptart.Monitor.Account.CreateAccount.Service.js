Poptart.Monitor.Account.CreateAccount.Service = function() {
	var ReturnObj = Object.create(Poptart.Services.Service, {});

	ReturnObj.saveAccount = function(data, holdingsData) {
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

		return Promise.resolve(jQuery.ajax({
			type: "POST",
			url: "/account/create",
			accept: "application/json",
			contentType: "application/json",
			data: JSON.stringify(payload)
		})).catch(function(e) {
			this.handleServerError(e);
		}.bind(this));
	};

	return ReturnObj;

}();