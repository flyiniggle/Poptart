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

		testTable.pqGrid({
			dataModel: {
				data: Poptart.Monitor.Account.treegridData,
				type: "local",
				sorting: "local"
			},
			width: "100%",
			flexHeight: true,
			colModel: [
				{title: "#", dataIndx: "pk", dataType: "integer", width: "40px"},
				{title: "Name", dataIndx: "name", dataType: "string", width: "175px"},
				{title: "Description", dataIndx: "description", dataType: "string", width: "150px"},
				{title: "Cash", dataIndx: "total_cash", dataType: "float", width: "100px"},
				{title: "Value", dataIndx: "total_value", dataType: "float", width: "100px"},
				{title: "Expected Cash", dataIndx: "expected_cash", dataType: "float", width: "150px"},
				{title: "Expected Value", dataIndx: "total_expected_value", dataType: "float", width: "150px"},
				{title: "Cash Drift", dataIndx: "cash_drift", dataType: "float", width: "100px"},
				{title: "Holdings Drift", dataIndx: "holdings_drift", dataType: "float", width: "100px"},
				{title: "Total Drift", dataIndx: "total_drift", dataType: "float", width: "100px"},
				{title: "Max Cash Drift", dataIndx: "max_cash_drift", dataType: "float", width: "150px"},
				{title: "Max Position Drift", dataIndx: "max_pos_drift", dataType: "float", width: "150px"},
				{title: "Max Total Drift", dataIndx: "max_total_drift", dataType: "float", width: "150px"},
				{title: "Client", dataIndx: "client_1_id", dataType: "string", minWidth: "150px"},
				{title: "Manager", dataIndx: "manager", dataType: "string"},
				{title: "Start Date", dataIndx: "inception_date", dataType: "date"},
				{title: "Solution", dataIndx: "solution_name", dataType: "string"},
				{title: "Last Updated", dataIndx: "last_update", dataType: "date"}
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