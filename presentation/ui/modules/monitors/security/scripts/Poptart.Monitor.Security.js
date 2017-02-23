Poptart.Monitor.Security = function() {
	var ReturnObj = {};

	ReturnObj.init = function() {
		var loaderConfig = Object.create(Poptart.Ignite.loaderConfig, {});

		loaderConfig.resources = "igGrid";
		loaderConfig.ready = function() {
			var table = jQuery("#sm_table");

			table.igGrid({
				dataSource: Poptart.Monitor.Security.securities,
				width: "100%",
				columns: [
					{headerText: "#", key: "pk", dataType: "integer", width: "40px"},
					{headerText: "Security", key: "ticker", dataType: "string", width: "150px"},
					{headerText: "CUSIP", key: "CUSIP", dataType: "string", width: "150px"},
					{headerText: "Description", key: "description", dataType: "string", width: "200px"},
					{headerText: "Last Price", key: "last_price", dataType: "float", width: "100px"},
					{headerText: "Asset Class", key: "segment", dataType: "float", width: "75px"}
				]
			});
		};
		jQuery.ig.loader(loaderConfig);
	};

	return ReturnObj;
}();