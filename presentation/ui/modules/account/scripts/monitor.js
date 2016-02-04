Poptart.Account.Monitor = function(){
	var ReturnObj = {};

	ReturnObj.init = function(){
		$("#am_accountSelector").autocomplete({
			source: Poptart.Account.Monitor.accountList,
			change: changeAccountURL
		}).on("blur", changeAccountURL);
		$("#am_testTable").igGrid({
			dataSource: Poptart.Account.Monitor.treegridData,
			primaryKey: "pk",
			width: "100%",
			height: "600px",
			defaultColumnWidth: "150px",
			columns: [
				{headerText: "Account Number", key: "pk", dataType: "number", width: "40px"},
				{headerText: "Name", key: "name", dataType: "string", width: "175px"},
				{headerText: "Description", key: "description", dataType: "string", width: "150px"},
				{headerText: "Cash", key: "total_cash", dataType: "number", width: "100px"},
				{headerText: "Value", key: "total_value", dataType: "number", width: "100px"},
				{headerText: "Expected Cash", key: "expected_cash", dataType: "number", width: "150px"},
				{headerText: "Expected Value", key: "total_expected_value", dataType: "number", width: "150px"},
				{headerText: "Cash Drift", key: "cash_drift", dataType: "number", width: "100px"},
				{headerText: "Holdings Drift", key: "holdings_drift", dataType: "number", width: "100px"},
				{headerText: "Total Drift", key: "total_drift", dataType: "number", width: "100px"},
				{headerText: "Max Cash Drift", key: "max_cash_drift", dataType: "number", width: "150px"},
				{headerText: "Max Position Drift", key: "max_pos_drift", dataType: "number", width: "150px"},
				{headerText: "Max Total Drift", key: "max_total_drift", dataType: "number", width: "150px"},
				{headerText: "Client", key: "client_1_id", dataType: "string"},
				{headerText: "Manager", key: "manager", dataType: "string"},
				{headerText: "Start Date", key: "inception_date", dataType: "date"},
				{headerText: "Solution", key: "solution_name", dataType: "string"},
				{headerText: "Last Updated", key: "last_update", dataType: "date"}
			],
			features:[
				{
					name: "GroupBy",
					groupByDialogContainment: "window",
					columnSettings:[
						{
							columnKey: "total_cash",
							summaries: [
								{
									summaryFunction:"custom",
									text: "Total cash:",
									customSummary: function(data){
										var cash = 0;
										$.map(data, function(d){
											cash += parseFloat(d);
										});
										return cash;
									}
								}
							]
						}
					]
				}
			]
		});
	};

	function changeAccountURL(e){
		var monitor = Poptart.Account.Monitor,
			i, pk;

		i = monitor.accountList.indexOf(e.target.value);
		pk = monitor.accountIDsList[i];
		$("#am_accountLauncher").attr("action", "/account/" + pk).submit();
	}

	return ReturnObj;
}();