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
		});
	};

	function showAccountSummary(data){
		var alertModel = function(){
			this.alerts = data.alerts
		};

		$("#accountCount").html(data.totalCount);
		$("#accountUpdated").html(data.recentAccounts);
		//$("#alertsContent").dataBind({component:{ name: 'alerts', params: {alerts: 'alerts'}}});
		ko.applyBindings(new alertModel());
		//append(nunjucks.render("templates/components/alerts/alerts.ninja", data));
	}

	function showSecuritySummary(data){
		$("#securityCount").html(data.totalCount);
	}

	return ReturnObj;
}();