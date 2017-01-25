Poptart.Account = function() {
	var ReturnObj = {};

	function displayAccountSummary(data) {

		return data;
	}

	function displayAccountHoldings(data) {

		return data;
	}

	function displayAccountAlerts(data) {

		return data;
	}

	ReturnObj.init = function() {
		this.Service.getAccountSummary().then(displayAccountSummary);
		this.Service.getAccountHoldings().then(displayAccountHoldings);
		this.Service.getAccountAlerts().then(displayAccountAlerts);
	};

	ReturnObj.updateHoldings = function() {
		this.Service.setAccountHoldings().then(this.update);
	};

	ReturnObj.update = function() {

	};

	return ReturnObj;
}();