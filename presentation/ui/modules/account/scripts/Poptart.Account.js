// Poptart.Account
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";
import { nunjucksEnvironment } from "Lib/Poptart.Nunjucks";
import { loaderConfig, loader } from "Lib/Poptart.Ignite";

import * as Poptart from "Poptart/poptart";
import { SummaryService, SecuritiesService, HoldingsService, AlertsService} from "Poptart/modules/account/scripts/Poptart.Account.Service";

import "Poptart/css/main";


var accountId;

function setAccountId(acctId) {
	accountId = parseInt(acctId);
}

function displayAccountSummary(data) {
	jQuery("#accountName").html(data.account);
	jQuery("#accountDescription").html(data.description);
	jQuery("#accountManager").html(data.manager);
	jQuery("#accountClient").html(data.client);
}

function displayAccountHoldings(data) {
	const tableEle = jQuery("#accountHoldingsTable");

	tableEle.igGrid({
		width: '100%',
		autoCommit: true,
		dataSource: new jQuery.ig.DataSource({
			dataSource: data[0],
			type: "json"
		}),
		dataSourceType: "json",
		primaryKey: "pk",
		autoGenerateColumns: false,
		columns: [
			{
				headerText: 'Security',
				key: "ticker",
				dataType: "object",
				width: "115px",
				mapper: function(security) {
					return security ? security.ticker : "";
				}
			},
			{headerText: 'CUSIP', key: "CUSIP", dataType: "number", width: "85px"},
			{headerText: 'Description', key: "security", dataType: "string", width: "200px"},
			{headerText: "Quantity", key: "quantity", dataType: "number", width: "85px"},
			{
				headerText: "Value",
				key: "value",
				dataType: "number",
				width: "85px",
				unbound: true,
				formula: function(row) {
					return row.quantity * row.lastPrice;
				}
			},
			{headerText: "Expected Quantity", key: "expectedQuantity", dataType: "number", width: "100px"},
			{headerText: "Expected Value", key: "expectedValue", dataType: "number", width: "100px"},
			{
				headerText: "Quantity Drift",
				key: "quantityDrift",
				dataType: "number",
				width: "100px",
				unbound: true,
				formula: function(row) {
					return Math.abs(row.expectedQuantity - row.quantity);
				}
			},
			{
				headerText: "Value Drift",
				key: "valueDrift",
				dataType: "number",
				width: "100px",
				unbound: true,
				formula: function(row) {
					return Math.abs(row.expectedValue - row.value);
				}
			},
			{headerText: "Segment", key: "segment", dataType: "string", width: "85px"},
			{headerText: "Price", key: "lastPrice", dataType: "number", width: "85px"},
			//hidden columns
			{headerText: "pk", key: "pk", dataType: "number", hidden: true}
		],
		features: [
			{
				name: "Adding",
				newRowFormatter: function(row) {
					return {
						ticker: row.ticker.ticker,
						CUSIP: row.ticker.CUSIP,
						security: row.ticker.security,
						quantity: row.quantity,
						value: row.value,
						expectedQuantity: row.expectedQuantity,
						expectedValue: row.expectedValue,
						quantityDrift: row.quantityDrift,
						valueDrift: row.valueDrift,
						segment: row.segment,
						lastPrice: row.lastPrice,
						pk: row.CUSIP
					};
				},
				columnSettings: [
					{
						columnKey: "ticker",
						readOnly: false,
						default: null,
						required: true,
						editorType: "combo",
						editorOptions: {
							textKey: "ticker",
							valueKey: "pk",
							autoComplete: true,
							mode: 'editable',
							autoSelectFirstMatch: false,
							selectItemBySpaceKey: true,
							//height: Poptart.Ignite.constants.INPUT_HEIGHT,
							//width: "500px",
							dataSource: new jQuery.ig.DataSource({
								dataSource: data[1],
								schema: new jQuery.ig.DataSchema("json", {
									fields: [
										{name: "pk", type: "number"},
										{name: "ticker", type: "string"},
										{name: "CUSIP", type: "number"},
										{name: "segment", type: "number"},
										{name: "lastPrice", type: "number"},
										{name: "security", type: "string"}
									]
								})
							})
						}
					},
					{
						columnKey: "CUSIP",
						readOnly: true,
						formula: (row = {}) => (row.ticker || {}).CUSIP
					},
					{
						columnKey: "security",
						readOnly: true,
						formula: (row = {}) => ((row.ticker || {}).security || "")
					},
					{
						columnKey: "value",
						readOnly: true,
						formula: function(row) {
							var securityObject = row.ticker || {};

							return (securityObject.lastPrice || 0) * row.quantity;
						}
					},
					{columnKey: "quantityDrift", readOnly: true},
					{
						columnKey: "lastPrice",
						readOnly: true,
						formula: (row = {}) => ((row.ticker || {}).lastPrice || "")
					}
				]
			},
			{
				name: "Updating",
				editMode: "cell",
				enableAddRow: false,
				enableDeleteRow: true,
				autoCommit: false,
				columnSettings: [
					{columnKey: "pk", readOnly: true},
					{columnKey: "ticker", readOnly: true},
					{columnKey: "security", readOnly: true},
					{columnKey: "CUSIP", readOnly: true},
					{columnKey: "quantityDrift", readOnly: true},
					{columnKey: "value", readOnly: true},
					{columnKey: "valueDrift", readOnly: true},
					{
						columnKey: "quantity",
						editorType: "numeric",
						readOnly: false,
						editorOptions: {
							blur: function() {
								tableEle.igGridUpdating("endEdit", true, true);
							}
						}
					},
					{
						columnKey: "expectedQuantity",
						editorType: "numeric",
						readOnly: false,
						editorOptions: {
							blur: function() {
								tableEle.igGridUpdating("endEdit", true, true);
							}
						}
					},
					{
						columnKey: "expectedValue",
						editorType: "currency",
						readOnly: false,
						editorOptions: {
							blur: function() {
								tableEle.igGridUpdating("endEdit", true, true);
							}
						}
					},
					{columnKey: "segment", readOnly: true},
					{columnKey: "lastPrice", readOnly: true}
				]
			}
		]
	});
}

function displayAccountHoldingsCharts(data) {
	jQuery("#accountDriftChart").igDataChart({
		dataSource: data,
		height: "300px",
		axes: [{
			name: "xAxis",
			type: "categoryX",
			label: "ticker",
			labelTopMargin: 5
		}, {
			name: "yAxis",
			type: "numericY",
			title: "Drift"
		}],
		series: [{
			name: "series1",
			title: "quantity",
			type: "column",
			isHighlightingEnabled: true,
			isTransitionInEnabled: true,
			xAxis: "xAxis",
			yAxis: "yAxis",
			valueMemberPath: "quantity"
		}]
	});
	jQuery("#accountHoldingsChart").igDoughnutChart({
		width: '100%',
		height: "300px",
		series: [{
			name: "Holdings",
			labelMemberPath: "ticker",
			valueMemberPath: "quantity",
			dataSource: data
		}]
	});
}

function displayAccountAlerts(data) {
	const alertsHtml = nunjucksEnvironment.render("presentation/templates/components/alerts/shared/alerts.ninja", {alerts: data});

	jQuery("#alertsContent").html(alertsHtml);
}

function saveAccount() {
	const data = jQuery("#accountHoldingsTable").igGrid("option", "dataSource").data();

	HoldingsService.set(accountId, data);
}

const init = function() {
	const configInstance = Object.create(loaderConfig, {});

	Poptart.init();
	configInstance.resources = "igGrid.Updating.Adding,igDataChart.Category,igDoughnutChart,igCombo";
	configInstance.ready = function() {
		SummaryService.get(accountId).then(displayAccountSummary);
		Promise.all([HoldingsService.get(accountId), SecuritiesService.get()]).then(displayAccountHoldings);
		HoldingsService.get(accountId).then(displayAccountHoldingsCharts);
		AlertsService.get(accountId).then(displayAccountAlerts);
	};
	loader(configInstance);

	jQuery("#saveAccount").on("click", saveAccount);
};

const updateHoldings = function() {
	//Poptart.Account.Service.setAccountHoldings().then(update);
};

const update = function() {

};

export {
	init,
	updateHoldings,
	update,
	setAccountId
};