// Poptart.Monitor.Security
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";
import Vue from "vue";

import { loaderConfig, loader } from "Lib/Poptart.Ignite";
import TopMenu from "Poptart/common/views/TopMenu/TopMenu"

import "Poptart/css/main";


var securities = [];

function init() {
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
	loader(configInstance);
};

function setSecurities(securitiesList = []) {
	securities = securitiesList;
}

//Main
(function() {
	new Vue({
		el: "#controlsContainer",
		components: { TopMenu },
		render: function(h) {
			return (
				<TopMenu>
					<div slot="navigatorControls">
						<a href="/">Dashboard</a>
					</div>
				</TopMenu>
			)
		}
	});

	jQuery(init);
})();

export { setSecurities };