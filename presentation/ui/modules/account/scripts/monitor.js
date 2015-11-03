Poptart.Account.Monitor = function(){
	var ReturnObj = {};

	ReturnObj.init = function(){
		$("#testTable").igTreeGrid({
			dataSource: Poptart.Account.Monitor.treegridData,
			primaryKey: "pk",
			columns: [
				{headerText: "Account Number", key: "pk", dataType: "number"},
				{headerText: "Name", key: "name", dataType: "string"},
				{headerText: "Description", key: "description", dataType: "string"},
				{headerText: "Cash", key: "total_cash", dataType: "number"},
				{headerText: "Client", key: "client_1_id", dataType: "string"},
				{headerText: "Manager", key: "manager", dataType: "string"},
				{headerText: "Start Date", key: "inception_date", dataType: "date"},
				{headerText: "Max Drift", key: "max_pos_drift", dataType: "number"},
				{headerText: "Solution", key: "solution_name", dataType: "string"},
				{headerText: "Last Updated", key: "last_update", dataType: "date"}
			]
		});
	};

	ReturnObj.initTreeGrid = function() {

	};

	return ReturnObj;
}();