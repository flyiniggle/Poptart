Poptart.Account = function() {
	"use strict";
	var ReturnObj = {},
		accountId = window.location.href.split("/").pop();

	function getTableColumns() {
		return [
			{headerText: 'Security', key: "ticker", dataType: "string", width: "85px"},
			{headerText: 'CUSIP', key: "CUSIP", dataType: "number", width: "85px"},
			{headerText: 'Description', key: "security", dataType: "string", width: "250px"},
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
			{headerText: "Expected Quantity", key: "expectedQuantity", dataType: "number", width: "110px"},
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
				width: "85px",
				unbound: true,
				formula: function(row) {
					return Math.abs(row.expectedValue - row.value);
				}
			},
			{headerText: "Segment", key: "segment", dataType: "string", width: "85px"},
			{headerText: "Price", key: "lastPrice", dataType: "number", width: "85px"},
			//hidden columns
			{headerText: "pk", key: "pk", dataType: "number", hidden: true}
		];
	}

	function getUpdatingSettings(table, data) {
		var securityEditorSettings, enableDelete, editMode,
			blurHandler, editEndedHandler,
			doneLabel = "Done";

		if(table.attr("id") === "accountHoldingsTable") {
			editMode = "cell";
			enableDelete = true;
			blurHandler = tableBlurHandler(table);
			securityEditorSettings = {columnKey: "ticker", readOnly: true};
		} else {
			editMode = "row";
			enableDelete = false;
			editEndedHandler = tableAddEditEndingHandler;
			doneLabel = "Add";
			securityEditorSettings = {
				columnKey: "ticker",
				readOnly: false,
				editorType: "combo",
				editorOptions: {
					textKey: "ticker",
					valueKey: "pk",
					autoComplete: true,
					autoSelectFirstMatch: false,
					delayInputChangeProcessing: 0,
					mode: 'editable',
					selectItemBySpaceKey: false,
					height: Poptart.Ignite.constants.INPUT_HEIGHT,
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
					selectionChanging: function(evt, ui) {
						if(ui.items.length) {
							try {
								table.igGridUpdating("updateRow", table.igGrid("option", "dataSource").dataView()[0].pk, ui.items[0].data);
								table.igGridUpdating("startEdit", table.igGrid("option", "dataSource").dataView()[0].pk, "ticker");
							} catch(e) {
								table.igGridUpdating("endEdit");
								table.igGridUpdating("updateRow", table.igGrid("option", "dataSource").dataView()[0].pk, ui.items[0].data);
								table.igGridUpdating("startEdit", table.igGrid("option", "dataSource").dataView()[0].pk, "ticker");
							}
						}
					},
					dropDownClosing: function(evt, ui) {
						var combo = jQuery(ui.element);

						combo.igCombo("select", combo.igCombo("itemsFromIndex", combo.igCombo("activeIndex")));

					}
				}
			};
		}

		return {
			name: "Updating",
			editMode: editMode,
			enableAddRow: false,
			enableDeleteRow: enableDelete,
			autoCommit: false,
			doneLabel: doneLabel,
			editRowEnded: editEndedHandler,
			columnSettings: [
				{columnKey: "pk", readOnly: true},
				securityEditorSettings,
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
						blur: blurHandler
					}
				},
				{
					columnKey: "expectedQuantity",
					editorType: "numeric",
					readOnly: false,
					editorOptions: {
						blur: blurHandler
					}
				},
				{
					columnKey: "expectedValue",
					editorType: "currency",
					readOnly: false,
					editorOptions: {
						blur: blurHandler
					}
				},
				{columnKey: "segment", readOnly: true},
				{columnKey: "lastPrice", readOnly: true}
			]
		};
	}

	function tableBlurHandler(table) {
		return function() {
			table.igGridUpdating("endEdit", true, true);
		};
	}

	function tableAddEditEndingHandler(evt, ui) {
		var addingTable = jQuery("#addHolding"),
			dataSource = addingTable.igGrid("option", "dataSource");

		if(ui.update) {
			jQuery("#accountHoldingsTable").igGridUpdating("addRow", dataSource.data()[0]);
			addingTable.igGridUpdating("updateRow",
				addingTable.igGrid("option", "dataSource").dataView()[0].pk,
				{
					pk: 1,
					CUSIP: "",
					ticker: "",
					security: "",
					segment: "",
					quantity: "",
					expectedValue: "",
					expectedQuantity: "",
					lastPrice: ""
				});

			addingTable.igGridUpdating("startEdit", 1, "ticker");
		}
	}

	function displayAccountSummary(data) {
		jQuery("#accountName").html(data.account);
		jQuery("#accountDescription").html(data.description);
		jQuery("#accountManager").html(data.manager);
		jQuery("#accountClient").html(data.client);
	}

	function displayAccountHoldings(data) {
		var tableEle = jQuery("#accountHoldingsTable");

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
			columns: getTableColumns(),
			features: [getUpdatingSettings(tableEle)]
		});
	}

	function displaySecurityAddingTable(data) {
		var tableEle = jQuery("#addHolding");

		tableEle.igGrid({
			width: '100%',
			autoCommit: true,
			showHeader: false,
			dataSource: new jQuery.ig.DataSource({
				dataSource: [{
					pk: 1,
					CUSIP: "",
					ticker: "",
					security: "",
					segment: "",
					quantity: "",
					expectedValue: "",
					expectedQuantity: "",
					lastPrice: ""
				}],
				type: "json"
			}),
			dataSourceType: "json",
			primaryKey: "pk",
			autoGenerateColumns: false,
			columns: getTableColumns(),
			features: [getUpdatingSettings(tableEle, data)]
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
			Poptart.Account.Service.SecuritiesService.get().then(displaySecurityAddingTable);
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