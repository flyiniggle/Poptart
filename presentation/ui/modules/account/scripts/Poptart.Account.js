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
		var tableEle = jQuery("#accountHoldingsTable")
		tableEle.igGrid({
			width: '100%',
			autoCommit: true,
			dataSource: new jQuery.ig.DataSource({
				dataSource: data,
				type: "json"
			}),
			dataSourceType: "json",
			primaryKey: "pk",
			autoGenerateColumns: false,
			columns: [
				{headerText: 'Security', key: "ticker", dataType: "string", width: "*"},
				{headerText: 'CUSIP', key: "CUSIP", dataType: "number", width: "*"},
				{headerText: 'Description', key: "security", dataType: "string", width: "*"},
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
						{columnKey: "securityLastPrice", readOnly: true},
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

	function displaySecurityList(data) {
		jQuery("#addHolding").igCombo({
			textKey: "ticker",
			valueKey: "pk",
			autoComplete: true,
			mode: 'editable',
			delayInputChangeProcessing: 0,
			autoSelectFirstMatch: false,
			selectItemBySpaceKey: true,
			multiSelection: {
				enabled: true,
				addWithKeyModifier: false,
				showCheckboxes: false,
				itemSeparator: ', '
			},
			height: Poptart.Ignite.constants.INPUT_HEIGHT,
			width: "500px",
			dataSource: new jQuery.ig.DataSource({
				dataSource: data,
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
			}),
			selectionChanging: function(e) {
				if (e.keyCode === 13) {
					e.preventDefault();
				}
			}
		}).on("keydown", function(e) {
			var combo, securities, table, firstEmptyRow, i;

			if(e.keyCode === 13) {
				combo = jQuery("#addHolding");
				table = jQuery("#accountHoldingsTable");
				securities = combo.igCombo("selectedItems");

				combo.igCombo("select",
					combo.igCombo("activeIndex"),
					{
						closeDropDown: "true",
						focusCombo: "false",
						additive: "true",
						keepInputText: "true",
						keepHighlighting: "true"
					}
				);

				for(i = 0; i < securities.length; i++) {
					table.igGridUpdating("addRow", securities[i].data);
				}

				combo.igCombo("deselectAll");

				firstEmptyRow = table.igGrid("option", "dataSource").dataView().findIndex(function(item) {
					return !item.quantity;
				});

				table.igGridUpdating("startEdit", table.igGrid("getElementInfo", table.igGrid("rowAt", firstEmptyRow)).rowId, "quantity");
			}
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

		loaderConfig.resources = "igGrid.Updating,igDataChart.Category,igPieChart,igCombo";
		loaderConfig.ready = function() {
			Poptart.Account.Service.SummaryService.get(accountId).then(displayAccountSummary);
			Poptart.Account.Service.HoldingsService.get(accountId).then(displayAccountHoldings);
			Poptart.Account.Service.HoldingsService.get(accountId).then(displayAccountHoldingsCharts);
			Poptart.Account.Service.AlertsService.get(accountId).then(displayAccountAlerts);
			Poptart.Account.Service.SecuritiesService.get().then(displaySecurityList);
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