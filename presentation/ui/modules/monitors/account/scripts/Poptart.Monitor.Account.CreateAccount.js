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

		//Methods
		self.addHolding = function() {
			this.holdings.push(new HoldingModel());
			jQuery("#accountAddHoldings").igGrid("commit");
		};
	};

	var HoldingModel = function() {
		var pk = 0;

		return function() {
			var self = this;

			self.pk = ko.observable(pk++);
			self.securityName = ko.observable("");
			self.securityId = ko.observable(0);
			self.segment = ko.observable("");
			self.securityLastPrice = ko.observable(0);
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

			//Because Ignite UI made me do it :/
			self.update = function(security) {
				self.securityName(security.ticker);
				self.securityId(security.pk);
				self.segment(security.segment);
				self.securityLastPrice(security.last_price);
			};
		};
	}();

	// Ig Component/Knockout Configuration
	/////////////////////////////////////////
	var setGridOptions = function() {
		this.width = '100%';
		this.autoCommit = true;
		this.autoGenerateColumns = false;
		this.columns = [
			{headerText: 'pk', key: "pk", dataType: "number", hidden: true},
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
				name: "Updating",
				editMode: "row",
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
					{
						columnKey: "pk",
						readOnly: true
					},
					{
						columnKey: "securityId",
						readOnly: true
					},
					{
						columnKey: "securityName",
						readOnly: false,
						editorType: "combo",
						editorOptions: setComboEditorOptions.call({})
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

	function setComboEditorOptions() {
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
			primaryKey: "pk",
			dataSource: viewModel.holdings
		});
		viewModel.expectedCashEditorOptions = setCurrencyEditorOptions.call({value: viewModel.expectedCash});
		viewModel.startingCashEditorOptions = setCurrencyEditorOptions.call({value: viewModel.startingCash});
		viewModel.maxCashDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxCashDrift});
		viewModel.maxPositionDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxPositionDrift});
		viewModel.maxTotalDriftEditorOptions = setCurrencyEditorOptions.call({value: viewModel.maxTotalDrift});
		viewModel.maxCashDriftPercentEditorOptions = setPercentEditorOptions.call({value: viewModel.maxCashDriftPercent});

		ko.applyBindings(viewModel);

		jQuery("#submitCreateAccount").on("click", Poptart.Monitor.Account.CreateAccount.submit.bind(this));
	};

	ReturnObj.submit = function() {
		this.Service.saveAccount(ko.toJS(viewModel)).then(checkCreateResponse);
	};

	//Private Functions
	//////////////////

	function checkCreateResponse(data) {
		data;
	}

	return ReturnObj;
}();