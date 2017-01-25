Poptart.Monitor.Account.CreateAccount.Service = function() {
	var ReturnObj = Object.create(Poptart.Services.service, {});

	ReturnObj.saveAccount = function(data) {
		var payload = {
			accountName: data.accountName,
			accountDescription: data.accountDescription,
			startingCash: data.startingCash,
			'expectedCash': data.expectedCash,
			'maxPositionDrift': data.maxPositionDrift,
			'maxCashDrift': data.maxCashDrift,
			'maxTotalDrift': data.maxTotalDrift,
			'holdings': data.holdings
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