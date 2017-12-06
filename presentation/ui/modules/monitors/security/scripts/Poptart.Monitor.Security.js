// Poptart.Monitor.Security
////////////////////////////////
import jQuery from "jquery";

import * as Poptart from "Poptart/poptart";
import { loaderConfig } from "Poptart/components/Poptart.Ignite";


var securities = [];

function init() {
	Poptart.init();

	let configInstance = Object.create(loaderConfig, {});

	configInstance.resources = "igGrid";
	configInstance.ready = function() {
		var table = jQuery("#sm_table");

		table.igGrid({
			dataSource: securities,
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
	jQuery.ig.loader(configInstance);
};

function setSecurities(securitiesList = []) {
	securities = securitiesList;
}

export { init, setSecurities };