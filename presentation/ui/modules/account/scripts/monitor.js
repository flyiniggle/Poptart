Poptart.Account.Monitor = function(){
	var ReturnObj = {};

	ReturnObj.init = function(){
		$("#testTable").igGrid({
			dataSource: Poptart.Account.Monitor.treegridData,
			primaryKey: "pk",
			columns: [
				{headerText: "Account Number", key: "pk", dataType: "number"},
				{headerText: "Name", key: "name", dataType: "string"},
				{headerText: "Description", key: "description", dataType: "string"},
				{headerText: "Cash", key: "total_cash", dataType: "number"},
				{headerText: "Client", key: "client_1_id", dataType: "string"},
				{headerText: "Manager", key: "manager", dataType: "string"},
				{headerText: "Start Date", key: "inception_date", dataType: "date"},
				{headerText: "Max Drift", key: "max_pos_drift", dataType: "number"},
				{headerText: "Solution", key: "solution_name", dataType: "string"},
				{headerText: "Last Updated", key: "last_update", dataType: "date"}
			],
			features:[
				{
					name: "GroupBy",
					groupByDialogContainment: "window",
					columnSettings:[
						{
							columnKey: "total_cash",
							summaries: [
								{
									summaryFunction:"custom",
									text: "Total cash:",
									customSummary: function(data){
										var cash = 0;
										$.map(data, function(d){
											cash += parseFloat(d);
										});
										return cash;
									}
								}
							]
						}
					]
				}
			]
		});
	};

	ReturnObj.initTreeGrid = function() {
		var grid = TreeGrid(Poptart.Account.Monitor.treeGridData, "gridMain");
		$("#grouper").on("click", function(){
			grid.DoGrouping("mgr");
		});
		$("#unGrouper").on("click", function() {
			grid.DoGrouping();
		});
	};

	ReturnObj.initJqGrid = function(data) {
		var gridSource, adapter;

		adapter = new $.jqx.dataAdapter({ localdata: data,  dataType: "array"}, {
			loadComplete: function(data) {},
			loadError: function(xhr, status, error){
				console.log(error);
			}
		});
		gridSource = {
			source: adapter,
			autoheight: true,
			//autowidth: true,
			width: 800,
			pageable: true,
			filterable: true,
			sortable: true,
			groupsexpandedbydefault: true,
			columns: [
				{text: "Account Number", pinned: true, datafield: "pk", dataType: "number", width: 50},
				{text: "Name", datafield: "name", dataType: "string", width: 140},
				{text: "Description", datafield: "description", dataType: "string", width: 140},
				{text: "Cash", datafield: "total_cash", dataType: "number", width: 140},
				{text: "Client", datafield: "client_1_id", dataType: "string", width: 50},
				{text: "Manager", datafield: "manager", dataType: "string", width: 90},
				{text: "Start Date", datafield: "inception_date", dataType: "date", width: 140},
				{text: "Max Drift", datafield: "max_pos_drift", dataType: "number", width: 140},
				{text: "Solution", datafield: "solution_name", dataType: "string", width: 50},
				{text: "Last Updated", datafield: "last_update", dataType: "date", width: 140}
			],
			groupable: true,
			groupsrenderer: getRenderer(adapter)
		};
		$("#gridMain").jqxGrid(gridSource);
	};

	var getRenderer = function(adapter){
		return function(text, group, expanded, data) {
			var number = adapter.formatNumber(group, data.groupcolumn.cellsformat),
				text = data.groupcolumn.text + ': ' + number,
				rows = [],
				aggregate, getRows;

			getRows = function(group, rows) {
				var i;
				if(group.subGroups.length > 0) {
					for(i = 0; i < group.subGroups.length; i++) {
						getRows(group.subGroups[i], rows);
					}
				} else {
					for(i = 0; i < group.subItems.length; i++) {
						rows.push(group.subItems[i]);
					}
				}
			};
			getRows(data, rows);
			aggregate = this.getcolumnaggregateddata("total_cash", ['sum'], true, rows);
			//}

			return "<span class='tableGroupTotal'>" + text + "</span><span class='tableGroupTotal'>Total cash: " + aggregate.sum + "</span>";
		}
	};

	return ReturnObj;
}();