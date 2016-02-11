var Poptart = function(){
	"use strict";

	var ReturnObj = {
		Monitor: {
			Account: {}
		},
		Dashboard: {}
	};

	ReturnObj.init = function(){
		$("#mainNavMenuTarget").on("mouseover", showNavMenu);
		$("#mainNavMenuTarget, #mainNavMenu").on("mouseleave", hideNavMenu);
	};

	// Private functions
	function showNavMenu() {
		jQuery("#mainNavMenu").show();
	}

	var hideNavMenu = function(event) {
		var relatedTarget = jQuery(event.relatedTarget);

		if((relatedTarget.attr("id") !== "mainNavMenuTarget")
				&& (relatedTarget.attr("id") !== "mainNavMenu")
				&& (relatedTarget.parents("#mainNavMenu").size() === 0)) {
			jQuery("#mainNavMenu").hide();
		}
	};

	return ReturnObj;
}();
