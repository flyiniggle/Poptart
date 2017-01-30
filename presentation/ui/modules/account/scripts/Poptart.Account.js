Poptart.Account = function() {
	"use strict";
	var ReturnObj = {},
		accountId = window.location.href.split("/").pop();

	function displayAccountSummary(data) {
		jQuery("#accountName").html(data.account);
		jQuery("#accountDescription").html(data.description);
		jQuery("#accountManager").html(data.manager);
		jQuery("#accountClient").html(data.client);
	}

	function displayAccountHoldings(data) {

		return data;
	}

	function displayAccountAlerts(data) {

		return data;
	}

	ReturnObj.init = function() {
		Poptart.Account.Service.getAccountSummary(accountId).then(displayAccountSummary);
		//Poptart.Account.Service.getAccountHoldings(accountId).then(displayAccountHoldings);
		//Poptart.Account.Service.getAccountAlerts(accountId).then(displayAccountAlerts);
	};

	ReturnObj.updateHoldings = function() {
		Poptart.Account.Service.setAccountHoldings().then(Poptart.Account.update);
	};

	ReturnObj.update = function() {

	};

	return ReturnObj;
}();