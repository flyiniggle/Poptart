Poptart.Dashboard = function() {
	var ReturnObj = {};

	ReturnObj.init = function() {
		$.ajax({
			url: "/summary/account",
			accepts: "application/json",
			success: showAccountSummary
		});

		$.ajax({
			url: "/summary/security",
			accepts: "application/json",
			success: showSecuritySummary
		})
	};

	function showAccountSummary(data){
		$("#accountCount").html(data.totalCount);
		$("#accountUpdated").html(data.recentAccounts);
		$("#cashDriftCount").html(data.highCashDriftCount);
		$("#holdingsDriftCount").html(data.highHoldingsDriftCount);
		$("#totalDriftCount").html(data.highTotalDriftCount);
	}

	function showSecuritySummary(data){
		$("#securityCount").html(data.totalCount);
	}

	return ReturnObj;
}();