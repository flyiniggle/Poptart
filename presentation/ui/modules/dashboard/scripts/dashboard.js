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
	}

	function showSecuritySummary(data){
		$("#securityCount").html(data.totalCount);
		console.log(data)
	}

	return ReturnObj;
}();