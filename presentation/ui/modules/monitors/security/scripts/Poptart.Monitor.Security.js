Poptart.Monitor.Security = function() {
	var ReturnObj = {};

	ReturnObj.init = function() {
		var table = jQuery("#sm_table"),
			tableControls;

		/*linkRenderer = function(ui) {
			var link = document.createElement("a");

			link.href = "/account/" + ui.rowData["pk"];
			link.innerHTML = ui.cellData;
			return link.outerHTML;
		};*/

		table.pqGrid({
			dataModel: {
				data: Poptart.Monitor.Security.securities
			},
			pageModel: {type: "local", rPP: 25, strRpp: "{0}", rPPOptions: [10, 25, 50, 100]},
			width: "100%",
			flexHeight: true,
			groupModel: {
				on: true
			},
			colModel: [
				{title: "#", dataIndx: "pk", dataType: "integer", width: "40px"},
				{title: "Ticker", dataIndx: "ticker", dataType: "string", width: "150px"},
				{title: "CUSIP", dataIndx: "CUSIP", dataType: "string", width: "150px"},
				{title: "Description", dataIndx: "description", dataType: "string", width: "200px"},
				{title: "Last Price", dataIndx: "last_price", dataType: "float", width: "100px"},
				{title: "Asset Class", dataIndx: "segment", dataType: "float", width: "75px"}
			]
		});

		tableControls = new Poptart.TableController(table);
	};

	return ReturnObj;
}();