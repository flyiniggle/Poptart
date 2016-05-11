Poptart.Monitor.Account = function(){
	var ReturnObj = {},
		tableControls;


	//Public Methods
	//////////////////

	ReturnObj.init = function(){
		var testTable = $("#am_testTable");

		$(".am_accountSelector").autocomplete({
			source: Poptart.Monitor.Account.accountList
		});

		testTable.igGrid({
			dataSource: Poptart.Monitor.Account.treegridData,
			primaryKey: "pk",
			width: "100%",
			defaultColumnWidth: "150px",
			columns: [
				{headerText: "#", key: "pk", dataType: "number", width: "40px"},
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
					name: "Paging"
				},
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

		tableControls = new Poptart.TableController(testTable);
	};

	ReturnObj.launchAccount = function(){
		var monitor = Poptart.Monitor.Account,
			i, pk;

		i = monitor.accountList.indexOf($("#am_accountLauncherSelector").val());
		pk = monitor.accountIDsList[i];
		$("#am_accountLauncher").attr("action", "/account/" + pk).submit();
	};

	return ReturnObj;
}();

Poptart.Monitor.Account.CreateAccount = function(){
	var ReturnObj = {},
		AccountCreationViewModel, viewModel;

	//View Models
	//////////////////

	AccountCreationViewModel = function() {
		var self = this;

		self.accountName = ko.observable("");
		self.accountDescription = ko.observable("");
		self.expectedCash = ko.observable("");
		self.startingCash = ko.observable("");
		self.maxPositionDrift = ko.observable("");
		self.maxCashDrift = ko.observable("");
		self.maxTotalDrift = ko.observable("");

		self.totalValue = ko.computed(function() {
			return this.startingCash();
		}, self);

		self.cashDrift = ko.computed(function() {
			return Math.abs(self.expectedCash() - self.startingCash())
		}, self);
	};


	//Public Methods
	//////////////////

	ReturnObj.init = function(){
		viewModel = new AccountCreationViewModel();
		ko.applyBindings(viewModel);

		$("#submitCreateAccount").on("click", Poptart.Monitor.Account.CreateAccount.submit);
	};

	ReturnObj.submit = function() {

		$.ajax({
			type: "POST",
			url: "/account/create",
			accept: "application/json",
			contentType: "application/json",
			success: checkCreateResponse,
			data: ko.toJSON(viewModel)
		});
	};


	//Private Functions
	//////////////////

	function checkCreateResponse(data){

	}

	return ReturnObj;
}();