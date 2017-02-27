Poptart.Account = function() {
	"use strict";
	var ReturnObj = {},
		accountId = window.location.href.split("/").pop();

	function displayAccountSummary(data) {
		jQuery("#accountName").html(data.account);
		jQuery("#accountDescription").html(data.description);
		jQuery("#accountManager").html(data.manager);
		jQuery("#accountClient").html(data.client);
	}

	function displayAccountHoldings(data) {
		jQuery("#accountHoldingsTable").igGrid({
			width: '100%',
			autoCommit: true,
			dataSource: data,
			dataSourceType: "json",
			primaryKey: "pk",
			autoGenerateColumns: false,
			columns: [
				{headerText: 'Security', key: "ticker", dataType: "string", width: "*"},
				{headerText: 'Description', key: "security", dataType: "string", width: "*"},
				{headerText: 'CUSIP', key: "CUSIP", dataType: "number", width: "*", hidden: true},
				{headerText: "Quantity", key: "quantity", dataType: "number", width: "*"},
				{
					headerText: "Value",
					key: "value",
					dataType: "number",
					width: "*",
					unbound: true,
					formula: function(row) {
						return row.quantity * row.lastPrice;
					}
				},
				{headerText: "Expected Quantity", key: "expectedQuantity", dataType: "number", width: "*"},
				{headerText: "Expected Value", key: "expectedValue", dataType: "number", width: "*"},
				{
					headerText: "Quantity Drift",
					key: "quantityDrift",
					dataType: "number",
					width: "*",
					unbound: true,
					formula: function(row) {
						return Math.abs(row.expectedQuantity - row.quantity);
					}
				},
				{
					headerText: "Value Drift",
					key: "valueDrift",
					dataType: "number",
					width: "*",
					unbound: true,
					formula: function(row) {
						return Math.abs(row.expectedValue - row.value);
					}
				},
				{headerText: "Segment", key: "segment", dataType: "string", width: "*"},
				{headerText: "Price", key: "lastPrice", dataType: "number", width: "*"},
				//hidden columns
				{headerText: "pk", key: "pk", dataType: "number", hidden: true}
			],
			features: [
				{
					name: "Updating",
					editMode: "row",
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
						{columnKey: "securityLastPrice", readOnly: true},
						{columnKey: "quantity", editorType: "numeric", readOnly: false},
						{columnKey: "expectedQuantity", editorType: "numeric", readOnly: false},
						{columnKey: "expectedValue", editorType: "currency", readOnly: false}
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
		jQuery("#accountHoldingsChart").igPieChart({
			dataSource: data,
			width: "49%",
			height: "300px",
			dataValue: "quantity",
			dataLabel: "ticker",
			legend: {
				element: "accountHoldingsChartLegend",
				type: "item",
				height: "300px",
				width: "49%"
			}
		});
	}

	function displayAccountAlerts(data) {
		var alertsHtml = nunjucks.render("/components/alerts/alerts.ninja", {alerts: data});

		jQuery("#alertsContent").html(alertsHtml);
	}

	ReturnObj.init = function() {
		var loaderConfig = Object.create(Poptart.Ignite.loaderConfig, {});

		loaderConfig.resources = "igGrid.Adding.Updating,igDataChart.Category,igPieChart";
		loaderConfig.ready = function() {
			Poptart.Account.Service.SummaryService.get(accountId).then(displayAccountSummary);
			Poptart.Account.Service.HoldingsService.get(accountId).then(displayAccountHoldings);
			Poptart.Account.Service.HoldingsService.get(accountId).then(displayAccountHoldingsCharts);
			Poptart.Account.Service.AlertsService.get(accountId).then(displayAccountAlerts);
		};
		jQuery.ig.loader(loaderConfig);
	};

	ReturnObj.updateHoldings = function() {
		Poptart.Account.Service.setAccountHoldings().then(Poptart.Account.update);
	};

	ReturnObj.update = function() {

	};

	return ReturnObj;
}();