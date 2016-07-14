Poptart.Monitor.Account = function(){
	var ReturnObj = {};


	//Public Methods
	//////////////////

	ReturnObj.init = function(){
		var testTable = jQuery("#am_testTable"),
			accountLauncher = jQuery("#am_accountLauncherSelector"),
			accountDeleter = jQuery("#am_accountDeleterSelector"),
			dataSource;

		accountLauncher.igCombo({
			dataSource: Poptart.Monitor.Account.accountList,
			valueKey: "id",
			textKey: "name",
			placeHolder: "Go to account...",
			autoComplete: true,
			height: "20px"
		});

		accountDeleter.igCombo({
			dataSource: Poptart.Monitor.Account.accountList,
			valueKey: "id",
			textKey: "name",
			placeHolder: "Delete account...",
			autoComplete: true,
			height: Poptart.Ignite.constants.INPUT_HEIGHT
		});

		dataSource = new jQuery.ig.DataSource({
			dataSource: "/monitors/account/tabledata",
			schema: new jQuery.ig.DataSchema("json", {
				outputResultsName: "accounts_data",
				fields: [
					{name: "pk", type: "number"},
					{name: "name", type: "string"},
					{name: "description", type: "string"},
					{name: "total_cash", type: "number"},
					{name: "total_value", type: "number"},
					{name: "expected_cash", type: "number"},
					{name: "total_expected_value", type: "number"},
					{name: "cash_drift", type: "number"},
					{name: "holdings_drift", type: "number"},
					{name: "total_drift", type: "number"},
					{name: "max_cash_drift", type: "number"},
					{name: "max_pos_drift", type: "number"},
					{name: "max_total_drift", type: "number"},
					{name: "client_1_id", type: "string"},
					{name: "manager", type: "string"},
					{name: "inception_date", type: "date"},
					{name: "solution_name", type: "string"},
					{name: "last_update", type: "date"}
				]
			}),
			responseDataKey: "accounts_data",
			responseTotalRecCountKey: "total_accounts"

		});

		testTable.igGrid({
			dataSource: dataSource,
			columns: [
				{headerText: "#", key: "pk", type: "number", width: "40px"},
				{headerText: "Name", key: "name", type: "string", width: "175px"},
				{headerText: "Description", key: "description", type: "number", width: "150px"},
				{headerText: "Cash", key: "total_cash", type: "number", width: "100px"},
				{headerText: "Client", key: "client_1_id", width: "150px"},
				{headerText: "Manager", key: "manager", width: "150px"},
				{headerText: "Solution", key: "solution_name", width: "150px"},
				{headerText: "Value", key: "total_value", width: "100px"},
				{headerText: "Expected Cash", key: "expected_cash", width: "150px"},
				{headerText: "Expected Value", key: "total_expected_value", width: "150px"},
				{headerText: "Cash Drift", key: "cash_drift", width: "100px"},
				{headerText: "Holdings Drift", key: "holdings_drift", width: "100px"},
				{headerText: "Total Drift", key: "total_drift", width: "100px"},
				{headerText: "Max Cash Drift", key: "max_cash_drift", width: "150px"},
				{headerText: "Max Position Drift", key: "max_pos_drift", width: "150px"},
				{headerText: "Max Total Drift", key: "max_total_drift", width: "150px"},
				{headerText: "Start Date", key: "inception_date", width: "150px"},
				{headerText: "Solution", key: "solution_name", width: "150px"},
				{headerText: "Last Updated", key: "last_update", width: "150px"}
			],
			features: [
				{
					name: "Paging",
					type: "remote",
					pageIndexUrlKey: "current_page",
					pageSizeUrlKey: "page_size",
					pageSizeDropDownLocation: "above",
					pageSizeList: [10, 25, 50, 100, 500, 1000]
				},
				{
					name: "Sorting",
					type: "remote",
					sortUrlKey: "order_by"
				},
				{
					name: "GroupBy",
					type: "remote",
					columnSettings: [
						{
							columnKey: "total_cash",
							summaries: [
								{
									text: "Total: ",
									summaryFunction: "sum"
								}
							]
						},
						{
							columnKey: "total_value",
							summaries: [
								{
									text: "Total: ",
									summaryFunction: "sum"
								}
							]
						}
					]
				}
			],
			width: "100%"
		});

		//Events
		jQuery("#am_accountLauncher").on("click", launchAccount.bind(accountLauncher));

	};

	var launchAccount = function(){
		var pk = this.igCombo("selectedItems")[0].data.id;

		jQuery("#am_accountLauncher").attr("action", "/account/" + pk).submit();
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
		}, self).extend({CurrencyDisplay: null});

		self.cashDrift = ko.computed(function() {
			return Math.abs(self.expectedCash() - self.startingCash())
		}, self).extend({CurrencyDisplay: null});
	};


	//Public Methods
	//////////////////

	ReturnObj.init = function(){
		viewModel = new AccountCreationViewModel();
		ko.applyBindings(viewModel);

		// Ig Components
		jQuery("#accountExpectedCashInput, #accountCashInput, #accountMaxCashDriftInput, #accountMaxPositionDriftInput, #accountMaxTotalDriftInput").igCurrencyEditor({
			currencySymbol: "$",
			minValue: 0,
			maxDecimals: 3,
			height: Poptart.Ignite.constants.INPUT_HEIGHT,
			width: "90%"
		});

		jQuery("#submitCreateAccount").on("click", Poptart.Monitor.Account.CreateAccount.submit);
	};

	ReturnObj.submit = function() {

		jQuery.ajax({
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