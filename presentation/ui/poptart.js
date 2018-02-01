// Poptart
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";

import * as RibbonMenu from "Poptart/components/Poptart.RibbonMenu";


// Public properties
//////////////////////
var nunjucksEnvironment;

// Public methods
///////////////////
const init = function() {
	jQuery("#mainNavMenuTarget").on("mouseover", showNavMenu);
	jQuery("#mainNavMenuTarget, #mainNavMenu").on("mouseleave", hideNavMenu);
	RibbonMenu.init();
};

// Private functions
//////////////////////
function showNavMenu() {
	jQuery("#mainNavMenu").show();
}

function hideNavMenu(event) {
	var relatedTarget = jQuery(event.relatedTarget);

	if((relatedTarget.attr("id") !== "mainNavMenuTarget")
			&& (relatedTarget.attr("id") !== "mainNavMenu")
			&& (relatedTarget.parents("#mainNavMenu").length === 0)) {
		jQuery("#mainNavMenu").hide();
	}
};

export {
	init,
	nunjucksEnvironment
};
