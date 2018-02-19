// Poptart.Monitor.Account.CreateAccount
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";
import ko from "Lib/Poptart.Knockout";
import { loaderConfig, constants, loader } from "Lib/Poptart.Ignite";

import * as CreateAccountService from "Poptart/modules/monitors/account/scripts/Poptart.Monitor.Account.CreateAccount.Service";

import "Poptart/modules/monitors/account/css/styles.css";


var viewModel;

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

	self.totalHoldingsValue = ko.computed(function() {
		return parseFloat(self.holdings().reduce(function(total, holding) {
			return total + holding.value();
		}, 0));
	}).extend({CurrencyDisplay: null});

	self.totalValue = ko.computed(function() {
		return parseFloat(this.startingCash() + this.totalHoldingsValue());
	}, self).extend({CurrencyDisplay: null});

	self.cashDrift = ko.computed(function() {
		return Math.abs(self.expectedCash() - self.startingCash());
	}, self).extend({CurrencyDisplay: null});

	self.holdingsDrift = ko.computed(function() {
		return parseFloat(self.holdings().reduce(function(total, holding) {
			return total + holding.valueDrift();
		}, 0));
	}).extend({CurrencyDisplay: null});
};

var HoldingModel = function() {
	return function(holding) {
		var self = this;

		self.pk = ko.observable(holding.pk);
		self.securityName = ko.observable(holding.security.ticker);
		self.securityLastPrice = ko.observable(holding.securityLastPrice);
		self.quantity = ko.observable(holding.quantity);
		self.expectedQuantity = ko.observable(holding.expectedQuantity);
		self.expectedValue = ko.observable(holding.expectedValue);

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
}();

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
			],
			rowAdded: calculateHoldingsModel.bind(this)
		},
		{
			name: "Updating",
			editMode: "cell",
			enableAddRow: false,
			enableDeleteRow: true,
			autoCommit: false,
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
			],
			rowDeleted: calculateHoldingsModel.bind(this),
			editCellEnded: calculateHoldingsModel.bind(this)
		}
	];

	return this;
};

const setCurrencyEditorOptions = function() {
	this.currencySymbol = "$";
	this.minValue = 0;
	this.maxDecimals = 2;
	this.height = constants.INPUT_HEIGHT;
	this.width = "90%";

	return this;
};

const setPercentEditorOptions = function() {
	this.minValue = 0;
	this.maxDecimals = 12;
	this.height = constants.INPUT_HEIGHT;
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

const init = function() {
	var configInstance = Object.create(loaderConfig, {});

	configInstance.resources = "igCombo,igEditors,igGrid.Updating.Adding,extensions/infragistics.datasource.knockoutjs.js,extensions/infragistics.ui.grid.knockout-extensions.js,extensions/infragistics.ui.combo.knockout-extensions.js,extensions/infragistics.ui.editors.knockout-extensions.js";
	configInstance.ready = function() {
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
			dataSourceType: "json",
			viewModel: viewModel
		}));

		jQuery("#submitCreateAccount").on("click", submit.bind(this));
	};
	loader(configInstance);
};

const submit = function() {
	CreateAccountService.saveAccount(ko.toJS(viewModel), jQuery("#createAccountHoldings").igGrid("dataSourceObject")).then(launchNewAccount);
};

//Private Functions
//////////////////

function launchNewAccount(account) {
	window.location.href = "/account/" + account;
}

function calculateHoldingsModel() {
	var rows = jQuery("#createAccountHoldings")
		.igGrid("dataSourceObject")
		.map(function(holding) {
			return new HoldingModel(holding);
		});

	this.viewModel.holdings(rows);
}

export {
	init,
	submit
};