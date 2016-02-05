var Poptart = function(){
	"use strict";

	var ReturnObj = {
		Account: {},
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
/*

var navigate = function(event) {
	var t = winFocus.jQuery(event.target),
			focus = t.data("focus"),
			subFocus = t.attr("id");
	Vmap.Rebalancer.TGWizard.Slide2.sendSlide2DefaultAction(focus, subFocus, winFocus.BC_FILTER_DEFINITION, "getMain", {});
};

var showSubMenu = function() {
	var el = winFocus.jQuery(".rebApp_NavBottomTabsContainer");

	winFocus.jQuery(".rebApp_NavParent").addClass("rebApp_TopNavOpened");
	el.fadeIn(200);
};

var hideSubMenu = function(event) {
	var relatedTarget = winFocus.jQuery(event.relatedTarget) || jQuery(event.relatedTarget);

	if((relatedTarget.attr("id") !== "rebApp_TradeReviewParentTab")
			&& (!relatedTarget.hasClass("rebApp_NavBottomTabsContainer"))
			&& (relatedTarget.parents(".rebApp_NavBottomTabsContainer").size() === 0)) {

		winFocus.jQuery(".rebApp_NavParent").removeClass("rebApp_TopNavOpened");
		winFocus.jQuery(".rebApp_NavBottomTabsContainer").fadeOut(200);
	}
};*/
