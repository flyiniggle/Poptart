Poptart.Account.Monitor = function(){
	var ReturnObj = {};

	ReturnObj.init = function(){
		$("#accountSelector").autocomplete({
			source: Poptart.Account.Monitor.accountList
		});
		$("#testTable").igGrid({
			dataSource: Poptart.Account.Monitor.treegridData,
			primaryKey: "pk",
			columns: [
				{headerText: "Account Number", key: "pk", dataType: "number"},
				{headerText: "Name", key: "name", dataType: "string"},
				{headerText: "Description", key: "description", dataType: "string"},
				{headerText: "Cash", key: "total_cash", dataType: "number"},
				{headerText: "Value", key: "total_value", dataType: "number"},
				{headerText: "Expected Cash", key: "expected_cash", dataType: "number"},
				{headerText: "Expected Value", key: "total_expected_value", dataType: "number"},
				{headerText: "Cash Drift", key: "cash_drift", dataType: "number"},
				{headerText: "Holdings Drift", key: "holdings_drift", dataType: "number"},
				{headerText: "Total Drift", key: "total_drift", dataType: "number"},
				{headerText: "Max Cash Drift", key: "max_cash_drift", dataType: "number"},
				{headerText: "Max Position Drift", key: "max_pos_drift", dataType: "number"},
				{headerText: "Max Total Drift", key: "max_total_drift", dataType: "number"},
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

	return ReturnObj;
}();