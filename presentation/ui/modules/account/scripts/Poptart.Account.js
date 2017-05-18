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
		var tableEle = jQuery("#accountHoldingsTable");

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
							formula: function(row) {
								var securityObject = row.ticker || {};

								return securityObject.CUSIP;
							}
						},
						{
							columnKey: "security",
							readOnly: true,
							formula: function(row) {
								var securityObject = row.ticker || {};

								return securityObject.security || "";
							}
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
							formula: function(row) {
								var securityObject = row.ticker || {};

								return securityObject.lastPrice || "";
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
		var alertsHtml = Poptart.nunjucks.render("presentation/templates/components/alerts/shared/alerts.ninja", {alerts: data});

		jQuery("#alertsContent").html(alertsHtml);
	}

	function saveAccount() {
		var data = jQuery("#accountHoldingsTable").igGrid("option", "dataSource").data();

		Poptart.Account.Service.HoldingsService.set(accountId, data);
	}

	ReturnObj.init = function() {
		var loaderConfig = Object.create(Poptart.Ignite.loaderConfig, {});

		loaderConfig.resources = "igGrid.Updating.Adding,igDataChart.Category,igDoughnutChart,igCombo";
		loaderConfig.ready = function() {
			Poptart.Account.Service.SummaryService.get(accountId).then(displayAccountSummary);
			Promise.all([Poptart.Account.Service.HoldingsService.get(accountId), Poptart.Account.Service.SecuritiesService.get()]).then(displayAccountHoldings);
			Poptart.Account.Service.HoldingsService.get(accountId).then(displayAccountHoldingsCharts);
			Poptart.Account.Service.AlertsService.get(accountId).then(displayAccountAlerts);
		};
		jQuery.ig.loader(loaderConfig);

		jQuery("#saveAccount").on("click", saveAccount);
	};

	ReturnObj.updateHoldings = function() {
		Poptart.Account.Service.setAccountHoldings().then(Poptart.Account.update);
	};

	ReturnObj.update = function() {

	};

	return ReturnObj;
}();