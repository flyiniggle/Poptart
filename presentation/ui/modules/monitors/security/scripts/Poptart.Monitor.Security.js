// Poptart.Monitor.Security
////////////////////////////////
import Vue from "vue";
import jQuery from "Lib/Poptart.jQuery";
import "jqueryui";
import "@infragistics/ignite-ui-full/en/js/infragistics.core";
//import "@infragistics/ignite-ui-full/en/js/infragistics.dv";
//import "@infragistics/ignite-ui-full/en/js/infragistics.lob";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.datasource";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.ui.grid.framework";
import "@infragistics/ignite-ui-full/en/js/modules/infragistics.ui.grid.shared";

import TopMenu from "Poptart/common/views/TopMenu/TopMenu"

import "Poptart/css/main";


var securities = [];

function init() {
	jQuery("#sm_table").igGrid({
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

//Main
(function() {
	if(window.POPTART_MODULE === "poptart.monitors.security") {
		securities = window.POPTART_DATA.securities

		new Vue({
			el: "#controlsContainer",
			components: {TopMenu},
			render: function (h) {
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
	}
})();