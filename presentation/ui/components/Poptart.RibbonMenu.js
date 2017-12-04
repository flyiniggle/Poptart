// Poptart.RibbonMenu
////////////////////////////////

import jQuery from "jquery";


var ribbonMenus = {},
	activeMenu;

const RibbonMenu = function(ele) {
	var self = this;

	self.label = ele.data("name");
	self.ribbonMenu = ele;
	self.tab = jQuery(".ribbonMenuTab[data-name='" + self.label + "'");

	self.select = function() {
		self.ribbonMenu.show();
		self.tab.removeClass("ribbonMenuTabUnselected").addClass("ribbonMenuTabSelected");
	};

	self.deselect = function() {
		self.ribbonMenu.hide();
		self.tab.removeClass("ribbonMenuTabSelected").addClass("ribbonMenuTabUnselected");
	};

	// Setup
	self.tab.one("click", showRibbonMenu.bind(self.tab));

};

function init() {
	var menus = jQuery(".ribbonMenu"),
		m;

	jQuery.each(menus, function(i, val) {
		m = jQuery(val);

		ribbonMenus[m.data("name")] = new RibbonMenu(m);
	});

	if(menus[0]) {
		showRibbonMenu.call(jQuery(menus[0]));
	}
};

function showRibbonMenu() {
	if(activeMenu) {
		activeMenu.deselect();
	}
	activeMenu = ribbonMenus[this.data("name")];
	activeMenu.select();

	activeMenu.tab.one("click", hideRibbonMenu);
}

function hideRibbonMenu() {
	activeMenu.tab.one("click", showRibbonMenu);
	activeMenu.deselect();
	activeMenu = null;
}

export { init };