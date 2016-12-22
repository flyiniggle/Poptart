Poptart.Monitor.Account.CreateAccount = function() {
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
				}
				return "";
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
			return Math.abs(self.expectedCash() - self.startingCash());
		}, self).extend({CurrencyDisplay: null});

	};

	var HoldingModel = function(securityName, securityId, segment, securityLastPrice) {
		var self = this;

		self.securityName = securityName;
		self.securityId = securityId;
		self.segment = segment;
		self.securityLastPrice = securityLastPrice;
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
				return this.quantity() * this.securityLastPrice;
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
			{headerText: "Name", key: "securityName", dataType: "string", width: "120px"},
			{headerText: "Id", key: "securityId", dataType: "number", width: "*"},
			{headerText: "Segment", key: "segment", dataType: "string", width: "*"},
			{headerText: "Quantity", key: "quantity", dataType: "number", width: "*"},
			{headerText: "Value", key: "value", dataType: "number", width: "*"},
			{headerText: "Expected Quantity", key: "expectedQuantity", dataType: "number", width: "*"},
			{headerText: "Expected Value", key: "expectedValue", dataType: "number", width: "*"},
			{headerText: "Quantity Drift", key: "quantityDrift", dataType: "number", width: "*"},
			{headerText: "Value Drift", key: "valueDrift", dataType: "number", width: "*"},
			{headerText: "Price", key: "securityLastPrice", dataType: "number", width: "*"}
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

	ReturnObj.init = function() {

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

	function checkCreateResponse(data) {
		data;
	}

	return ReturnObj;
}();