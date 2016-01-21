Poptart.Dashboard = function() {
	var ReturnObj = {};

	ReturnObj.init = function() {
		$.ajax({
			url: "/summary",
			accepts: "application/json",
			success: _showSummary
		})
	};

	function _showSummary(data){
		$("#summary_accountCount").html(data.totalCount);
		$("#summary_updatedAccounts").html(data.recentAccounts);
	}

	return ReturnObj;
}();