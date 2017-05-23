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

		//Computed
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


	// Ig Component/Knockout Configuration
	/////////////////////////////////////////
	var setGridOptions = function() {
		this.width = '100%';
		this.autoCommit = true;
		this.autoGenerateColumns = false;
		this.columns = [
			{
				headerText: "Name",
				key: "security",
				dataType: "object",
				width: "150px",
				mapper: function(row) {
					var securityObject = row.security || {};

					return securityObject.ticker || "";
				}
			},
			{
				headerText: "CUSIP",
				key: "CUSIP",
				dataType: "string",
				width: "80px"
			},
			{
				headerText: "Description",
				key: "description",
				dataType: "number",
				width: "200px"
			},
			{headerText: "Quantity", key: "quantity", dataType: "number", width: "80px"},
			{
				headerText: "Value",
				key: "value",
				dataType: "number",
				unbound: true,
				width: "80px",
				formula: function(row) {
					return (row.securityLastPrice || 0) * row.quantity;
				}
			},
			{headerText: "Expected Quantity", key: "expectedQuantity", dataType: "number", width: "80px"},
			{headerText: "Expected Value", key: "expectedValue", dataType: "number", width: "100px"},
			{
				headerText: "Quantity Drift",
				key: "quantityDrift",
				dataType: "number",
				width: "100px",
				unbound: true,
				formula: function(row) {
					return Math.abs(row.quantity - row.expectedQuantity);
				}
			},
			{
				headerText: "Value Drift",
				key: "valueDrift",
				dataType: "number",
				width: "100px",
				unbound: true,
				formula: function(row) {
					return Math.abs(((row.securityLastPrice || 0) * row.quantity) - row.expectedValue);
				}
			},
			{headerText: "Segment", key: "segment", dataType: "string", width: "100px"},
			{headerText: "Price", key: "securityLastPrice", dataType: "number", width: "100px"},
			{headerText: 'pk', key: "pk", dataType: "number", hidden: true}
		];
		this.features = [
			{
				name: "Adding",
				newRowFormatter: function(row) {
					return {
						security: row.security,
						CUSIP: row.security.CUSIP,
						description: row.security.description,
						quantity: row.quantity,
						expectedQuantity: row.expectedQuantity,
						expectedValue: row.expectedValue,
						segment: row.security.segment,
						securityLastPrice: row.security.last_price,
						pk: row.security.pk
					};
				},
				columnSettings: [
					{
						columnKey: "security",
						readOnly: false,
						default: null,
						required: true,
						editorType: "combo",
						editorOptions: setComboEditorOptions.call({}),
						mapper: function(security) {
							return security ? security.ticker : "";
						}
					},
					{
						columnKey: "CUSIP",
						readOnly: true,
						formula: function(row) {
							var securityObject = row.security || {};

							return securityObject.CUSIP || "";
						}
					},
					{
						columnKey: "description",
						formula: function(row) {
							var securityObject = row.security || {};

							return securityObject.description || "";
						}
					},
					{
						columnKey: "value",
						readOnly: true,
						formula: function(row) {
							var securityObject = row.security || {};

							return (securityObject.last_price || 0) * row.quantity;
						}
					},
					{columnKey: "quantityDrift", readOnly: true},
					{
						columnKey: "valueDrift",
						readOnly: true,
						formula: function(row) {
							var securityObject = row.security || {};

							return Math.abs(((securityObject.last_price || 0) * row.quantity) - row.expectedValue);
						}
					},
					{
						columnKey: "securityLastPrice",
						readOnly: true,
						formula: function(row) {
							var securityObject = row.security || {};

							return securityObject.last_price || "";
						}
					},
					{
						columnKey: "segment",
						readOnly: true,
						formula: function(row) {
							var securityObject = row.security || {};

							return securityObject.segment || "";
						}
					}
				]
			},
			{
				name: "Updating",
				editMode: "cell",
				enableAddRow: false,
				enableDeleteRow: true,
				autoCommit: false,
				editCellEnded: function(event, ui) {
					var val;

					if(ui.columnKey === "securityName") {
						val = ui.editor.igCombo("dataForValue", ui.editor.igCombo('value'));
						ui.owner.grid.findRecordByKey(ui.rowID).update(val);
						ui.owner.grid.commit();
					}
				},
				columnSettings: [
					{columnKey: "security", readOnly: true},
					{columnKey: "CUSIP", readOnly: true},
					{columnKey: "description", readOnly: true},
					{columnKey: "quantity", editorType: "numeric", readOnly: false},
					{columnKey: "value", readOnly: true},
					{columnKey: "quantityDrift", readOnly: true},
					{columnKey: "valueDrift", readOnly: true},
					{columnKey: "securityLastPrice", readOnly: true},
					{columnKey: "expectedQuantity", editorType: "numeric", readOnly: false},
					{columnKey: "expectedValue", editorType: "currency", readOnly: false},
					{columnKey: "segment", readOnly: true},
					{columnKey: "pk", readOnly: true}
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

	function setComboEditorOptions() {
		this.textKey = "ticker";
		this.valueKey = "pk";
		this.autoComplete = true;
		this.autoSelectFirstMatch = false;
		this.selectItemBySpaceKey = true;
		this.mode = 'editable';
		this.dataSource = new jQuery.ig.DataSource({
			dataSource: "/monitors/account/securities",
			type: "remoteUrl",
			schema: new jQuery.ig.DataSchema("json", {
				fields: [
					{name: "pk", type: "number"},
					{name: "ticker", type: "string"},
					{name: "CUSIP", type: "number"},
					{name: "segment", type: "string"},
					{name: "last_price", type: "number"},
					{name: "description", type: "string"}
				]
			})
		});

		return this;
	};

	//Public Methods
	//////////////////

	ReturnObj.init = function() {
		var loaderConfig = Object.create(Poptart.Ignite.loaderConfig, {});

		loaderConfig.resources = "igCombo,igEditors,igGrid.Updating.Adding,extensions/infragistics.datasource.knockoutjs.js,extensions/infragistics.ui.grid.knockout-extensions.js,extensions/infragistics.ui.combo.knockout-extensions.js,extensions/infragistics.ui.editors.knockout-extensions.js";
		loaderConfig.ready = function() {
			viewModel = new AccountCreationViewModel();

			//append ig component options
			viewModel.expectedCashEditorOptions = setCurrencyEditorOptions.call({value: viewModel.expectedCash});
			viewModel.startingCashEditorOptions = setCurrencyEditorOptions.call({value: viewModel.startingCash});
			viewModel.maxCashDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxCashDrift});
			viewModel.maxPositionDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxPositionDrift});
			viewModel.maxTotalDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxTotalDrift});
			viewModel.maxCashDriftPercentEditorOptions = setPercentEditorOptions.call({value: viewModel.maxCashDriftPercent});

			ko.applyBindings(viewModel);

			jQuery("#createAccountHoldings").igGrid(setGridOptions.call({
				primaryKey: "pk",
				dataSource: [],
				dataSourceType: "json"
			}));

			jQuery("#submitCreateAccount").on("click", Poptart.Monitor.Account.CreateAccount.submit.bind(this));
		};
		jQuery.ig.loader(loaderConfig);
	};

	ReturnObj.submit = function() {
		Poptart.Monitor.Account.CreateAccount.Service.saveAccount(ko.toJS(viewModel), jQuery("#createAccountHoldings").igGrid("dataSourceObject")).then(checkCreateResponse);
	};

	//Private Functions
	//////////////////

	function checkCreateResponse(data) {
		data;
	}

	return ReturnObj;
}();