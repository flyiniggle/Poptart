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
			height: "640px",
			width: "100%",
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
			]
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
	var ReturnObj = {}, viewModel;

	//View Models
	//////////////////

	var AccountCreationViewModel = function() {
		var self = this;

		self.accountName = ko.observable("");
		self.accountDescription = ko.observable("");
		self.expectedCash = ko.observable("");
		self.startingCash = ko.observable("");
		self.maxPositionDrift = ko.observable("");
		self.maxTotalDrift = ko.observable("");
		self.maxCashDrift = ko.observable("");
		self.holdings = ko.observableArray([]);

		self.maxCashDriftPercent = ko.computed({
			read: function() {
				var self = this,
					max = parseFloat(self.maxCashDrift()),
					expected = parseFloat(self.expectedCash());

				if(!isNaN(max) && !isNaN(expected)) {
					return (max / expected);
				} else {
					return "";
				}
			},
			write: function(value) {
				var self = this;

				self.maxCashDrift(parseFloat(self.expectedCash()) * parseFloat(value));
			},
			owner: self
		});

		self.totalValue = ko.computed(function() {
			return this.startingCash();
		}, self).extend({CurrencyDisplay: null});

		self.cashDrift = ko.computed(function() {
			return Math.abs(self.expectedCash() - self.startingCash())
		}, self).extend({CurrencyDisplay: null});

	};

	var HoldingModel = function(securityName, securityId, segment, securityLastPrice) {
		var self = this;

		self.securityName = ko.observable(securityName);
		self.securityId = ko.observable(securityId);
		self.segment = ko.observable(segment);
		self.securityLastPrice = ko.observable(securityLastPrice);
		self.quantity = ko.observable(0);
		self.expectedQuantity = ko.observable(0);
		self.expectedValue = ko.observable(0);

		self.quantityDrift = ko.pureComputed({
			read: function() {
				return Math.abs(this.expectedQuantity() - this.quantity());
			},
			write: function() {
				return undefined;
			},
			owner: self
		}, self);
		self.valueDrift = ko.pureComputed({
			read: function() {
				return Math.abs(this.expectedValue() - this.value());
			},
			write: function() {
				return undefined;
			},
			owner: self
		}, self);
		self.value = ko.pureComputed({
			read: function() {
				return this.quantity() * this.securityLastPrice();
			},
			write: function() {
				return undefined;
			},
			owner: self
		});
	};

	// Ig Component/Knockout Configuration
	/////////////////////////////////////////
	var setGridOptions = function() {
		this.width = '100%';
		this.autoCommit = true;
		this.autoGenerateColumns = false;

		this.columns = [
			{headerText: "Name", key: "securityName", dataType:"string", width: "120px"},
			{headerText: "Id", key: "securityId", dataType: "number"},
			{headerText: "Segment", key: "segment", dataType: "string"},
			{headerText: "Quantity", key: "quantity", dataType: "number"},
			{headerText: "Value", key: "value", dataType: "number"},
			{headerText: "Expected Quantity", key: "expectedQuantity", dataType: "number"},
			{headerText: "Expected Value", key: "expectedValue", dataType: "number"},
			{headerText: "Quantity Drift", key: "quantityDrift", dataType: "number"},
			{headerText: "Value Drift", key: "valueDrift", dataType: "number"},
			{headerText: "Price", key: "securityLastPrice", dataType: "number"}
		];
		this.features = [
			{
				name: "Selection",
				editMode: "row"
			},
			{
				name: "Updating",
				editMode: "row",
				enableDeleteRow: true,
				generatePrimaryKeyValue: function(evt, ui) {
					// setting a primary key for the new row
					ui.value = 'PK' + ui.value;
				},
				columnSettings: [
					{
						columnKey: "securityId",
						readOnly: true
					},
					{
						columnKey: "securityName",
						readOnly: true
					},
					{
						columnKey: "segment",
						readOnly: true
					},
					{
						columnKey: "quantityDrift",
						readOnly: true
					},
					{
						columnKey: "value",
						readOnly: true
					},
					{
						columnKey: "valueDrift",
						readOnly: true
					},
					{
						columnKey: "securityLastPrice",
						readOnly: true
					},
					{
						columnKey: "quantity",
						editorType: "numeric",
						readOnly: false
					},
					{
						columnKey: "expectedQuantity",
						editorType: "numeric",
						readOnly: false
					},
					{
						columnKey: "expectedValue",
						editorType: "currency",
						readOnly: false
					}
				]
			}
		];

		return this;
	};

	var setNumericEditorOptions = function() {
		this.height = Poptart.Ignite.constants.INPUT_HEIGHT;
		this.width = "90%";

		return this;
	};

	var setCurrencyEditorOptions = function() {
		this.currencySymbol = "$";
		this.minValue = 0;
		this.maxDecimals = 2;
		this.height = Poptart.Ignite.constants.INPUT_HEIGHT;
		this.width = "90%";

		return this;
	};

	var setPercentEditorOptions = function() {
		this.minValue = 0;
		this.maxDecimals = 12;
		this.height = Poptart.Ignite.constants.INPUT_HEIGHT;
		this.width = "90%";

		return this;
	};

	var setComboEditorOptions = function() {
		this.height = Poptart.Ignite.constants.INPUT_HEIGHT;
		this.width = "90%";
		this.textKey = "ticker";
		this.valueKey = "pk";
		this.autoComplete = true;
		this.mode = 'dropdown';
		this.dataSource = new jQuery.ig.DataSource({
			dataSource: "/monitors/account/securities",
			type: "remoteUrl",
			schema: new jQuery.ig.DataSchema("json", {
				fields: [
					{name: "pk", type: "number"},
					{name: "ticker", type: "string"},
					{name: "CUSIP", type: "number"},
					{name: "segment", type: "string"},
					{name: "last_price", type: "number"}
				]
			})
		});

		return this;
	};


	//Public Methods
	//////////////////

	ReturnObj.init = function(){

		viewModel = new AccountCreationViewModel();

		//append ig component options
		viewModel.holdingsGridOptions = setGridOptions.call({
			primaryKey: "securityId",
			dataSource: viewModel.holdings
		});
		viewModel.accountSecuritySelectEditorOptions = setComboEditorOptions.call({
			selectionChanged: function(evt, ui) {
				var security = ui.items[0].data;

				viewModel.holdings.push(new HoldingModel(security.ticker, security.pk, security.segment, security.last_price));
			}
		});
		viewModel.expectedCashEditorOptions = setCurrencyEditorOptions.call({value: viewModel.expectedCash});
		viewModel.startingCashEditorOptions = setCurrencyEditorOptions.call({value: viewModel.startingCash});
		viewModel.maxCashDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxCashDrift});
		viewModel.maxPositionDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxPositionDrift});
		viewModel.maxTotalDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxTotalDrift});
		viewModel.maxCashDriftPercentEditorOptions = setPercentEditorOptions.call({value: viewModel.maxCashDriftPercent});

		ko.applyBindings(viewModel);

		jQuery("#submitCreateAccount").on("click", Poptart.Monitor.Account.CreateAccount.submit);
		jQuery("#accountSecuritySelect").igCombo(viewModel.accountSecuritySelectEditorOptions);
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