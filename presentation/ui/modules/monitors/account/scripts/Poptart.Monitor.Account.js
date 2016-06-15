Poptart.Monitor.Account = function(){
	var ReturnObj = {},
		tableControls;


	//Public Methods
	//////////////////

	ReturnObj.init = function(){
		var testTable = jQuery("#am_testTable"),
			linkRenderer;

		jQuery(".am_accountSelector").autocomplete({
			source: Poptart.Monitor.Account.accountList
		});

		linkRenderer = function(ui) {
			var link = document.createElement("a");

			link.href = "/account/" + ui.rowData["pk"];
			link.innerHTML = ui.cellData;
			return link.outerHTML;
		};

		testTable.kendoGrid({
			dataSource: {
				transport: {
					type: "GET",
					read: {
						url: "/monitors/account/tabledata",
						dataType: "JSON"
					}
				},
				aggregate: [
					{field: "total_value", aggregate: "sum"},
					{field: "total_cash", aggregate: "sum"}
				],
				schema: {
					total: "total",
					groups: "group",
					data: "data",
					fields: {
						pk: { type: "number"},
						name: {type: "string"},
						description: {type: "string"},
						total_cash: {type: "number"},
						total_value: {type: "number"},
						expected_cash: {type: "number"},
						total_expected_value: {type: "number"},
						cash_drift: {type: "number"},
						holdings_drift: {type: "number"},
						total_drift: {type: "number"},
						max_cash_drift: {type: "number"},
						max_pos_drift: {type: "number"},
						max_total_drift: {type: "number"},
						client_1_id: {type: "string"},
						manager: {type: "string"},
						inception_date: {type: "date"},
						solution_name: {type: "string"},
						last_update: {type: "date"}
					}
				},
				pageSize: 50,
				serverPaging: true,
				serverGrouping: true
			},
			pageable: {
				pageSizes: [10, 25, 50, 100, 500, 1000],
				numeric: true
			},
			groupable: {
				showFooter: true
			},
			height: 600,
			columns: [
				{title: "#", field: "pk", width: "40px"},
				{title: "Name", field: "name", width: "175px"},
				{title: "Description", field: "description", width: "150px"},
				{title: "Cash", field: "total_cash", width: "100px", aggregates: ["sum"], groupFooterTemplate: "Total: #=sum#"},
				{title: "Value", field: "total_value", width: "100px", aggregates: ["sum"], groupFooterTemplate: "Total: #=sum#"},
				{title: "Expected Cash", field: "expected_cash", width: "150px"},
				{title: "Expected Value", field: "total_expected_value", width: "150px"},
				{title: "Cash Drift", field: "cash_drift", width: "100px"},
				{title: "Holdings Drift", field: "holdings_drift", width: "100px"},
				{title: "Total Drift", field: "total_drift", width: "100px"},
				{title: "Max Cash Drift", field: "max_cash_drift", width: "150px"},
				{title: "Max Position Drift", field: "max_pos_drift", width: "150px"},
				{title: "Max Total Drift", field: "max_total_drift", width: "150px"},
				{title: "Client", field: "client_1_id", width: "150px"},
				{title: "Manager", field: "manager", width: "150px"},
				{title: "Start Date", field: "inception_date", width: "150px"},
				{title: "Solution", field: "solution_name", width: "150px"},
				{title: "Last Updated", field: "last_update", width: "150px"}
			]
		});

		//tableControls = new Poptart.TableController(testTable);
	};

	ReturnObj.launchAccount = function(){
		var monitor = Poptart.Monitor.Account,
			i, pk;

		i = monitor.accountList.indexOf(jQuery("#am_accountLauncherSelector").val());
		pk = monitor.accountIDsList[i];
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