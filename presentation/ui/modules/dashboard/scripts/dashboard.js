Poptart.Dashboard = function() {
	var ReturnObj = {};

	ReturnObj.init = function() {
		jQuery.ajax({
			url: "/summary/account",
			accepts: "application/json",
			success: showAccountSummary
		});

		jQuery.ajax({
			url: "/summary/security",
			accepts: "application/json",
			success: showSecuritySummary
		});
	};

	function showAccountSummary(data) {

		jQuery("#accountCount").html(data.totalCount);
		jQuery("#accountUpdated").html(data.recentAccounts);
		jQuery("#alertsContent").append(nunjucks.render("templates/components/alerts/alerts.ninja", data));
	}

	function showSecuritySummary(data) {
		jQuery("#securityCount").html(data.totalCount);
	}

	return ReturnObj;
}();