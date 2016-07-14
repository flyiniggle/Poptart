var Poptart = function(){
	"use strict";

	var ReturnObj = {
		Monitor: {
			Account: {}
		},
		Dashboard: {}
	};

	//Global Setup
	///////////////
	jQuery.noConflict();

	//Allow script bindings for knockout
	var render = function(options) {
		var rendered = [], key, val;
		for(key in options) {
			if(options.hasOwnProperty(key)) {
				val = options[key];
				switch(typeof val) {
				case 'string':
					rendered.push(key + ':' + val);
					break;
				case 'object':
					rendered.push(key + ':{' + render(val) + '}');
					break;
				case 'function':
					rendered.push(key + ':' + val.toString());
					break;
				}
			}
		}
		return rendered.join(',');
	};

	jQuery['fn']['dataBind'] = jQuery['fn']['dataBind'] || function(options) {
		return this['each'](function() {
			var opts = jQuery.extend({}, jQuery['fn']['dataBind']['defaults'], options),
					attr = render(opts);
			if(attr != null && attr != '') {
				jQuery(this)['attr']('data-bind', attr);
			}
		});
	};

	ko.components.loaders.unshift({
		loadTemplate: function(name, templateConfig, callback) {
			if(templateConfig.module) {
				// Uses jQuery's ajax facility to load the markup from a file
				var fullUrl = '/templates/' + templateConfig.module + "/" + templateConfig.name;
				jQuery.get(fullUrl, function(markupString) {
					// We need an array of DOM nodes, not a string.
					// We can use the default loader to convert to the
					// required format.
					ko.components.defaultLoader.loadTemplate(name, markupString, callback);
				});
			} else {
				// Unrecognized config format. Let another loader handle it.
				callback(null);
			}
		}
	});

	//Register knockout components
	/////////////////////////////////

	//Register knockout bindings3+
	/////////////////////////////////
	ko.bindingHandlers.IgCurrencyEditor = {
		init: function(element, valueAccessor) {
			jQuery(element).on("igcurrencyeditortextchanged", function(event, ele) {
				valueAccessor()(jQuery(this).igCurrencyEditor("value"));
			})
		}
	};

	//Register knockout extenders
	/////////////////////////////////
	ko.extenders.CurrencyDisplay = function(target) {
		target.formattedValue = ko.observable();

		target.subscribe(function(value) {
			var floatValue = parseFloat(value),
				sign = "",
				i = 0,
				parts, intPart, formattedValue;

			if(isNaN(floatValue)){
				target.formattedValue(". . .");
			}
			parts = floatValue.toFixed(2).toString().split(".");
			intPart = parts.shift().split("");
			formattedValue = [];

			if(floatValue < 0) {
				sign = intPart.shift();
			}

			while(intPart.length > 0){
				if((i > 0 ) && !(i % 3)){
					formattedValue.unshift(",");
				}
				formattedValue.unshift(intPart.pop());
				i++;
			}

			formattedValue.push(".");
			formattedValue.unshift(sign);
			formattedValue.unshift("$");

			target.formattedValue(formattedValue.concat(parts).join(""));
		});

		return target
	};


	// Public methods
	///////////////////

	ReturnObj.init = function(){
		jQuery("#mainNavMenuTarget").on("mouseover", showNavMenu);
		jQuery("#mainNavMenuTarget, #mainNavMenu").on("mouseleave", hideNavMenu);
		Poptart.RibbonMenu.init();
	};


	// Private functions
	//////////////////////

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

Poptart.RibbonMenu = function(){
	var ReturnObj = {},
		ribbonMenus = {},
		activeMenu;

	var RibbonMenu = function(ele) {
		var self = this;

		self.label = ele.data("name");
		self.ribbonMenu = ele;
		self.tab = jQuery(".ribbonMenuTab[data-name='" + self.label + "'");

		self.select = function() {
			self.ribbonMenu.show();
			self.tab.removeClass("ribbonMenuTabUnselected").addClass("ribbonMenuTabSelected")
		};

		self.deselect = function() {
			self.ribbonMenu.hide();
			self.tab.removeClass("ribbonMenuTabSelected").addClass("ribbonMenuTabUnselected")
		};

		// Setup
		self.tab.one("click", showRibbonMenu.bind(self.tab));

	};

	ReturnObj.init = function() {
		var menus = jQuery(".ribbonMenu"),
			m;

		jQuery.each(menus, function(i, val){
				m = jQuery(val);
					ribbonMenus[m.data("name")] = new RibbonMenu(m);
			});

		if(menus[0]) {
			showRibbonMenu.call(jQuery(menus[0]));
		}
	};

	function showRibbonMenu() {
		if(!!activeMenu){
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

	return ReturnObj;

}();

Poptart.Ignite = {
	/*
	 A place to keep constants and other useful global things for Ignite UI controls.
	 I can't wait till I get to spend more time on webpack or module loading; gonna refactor
	 the bejeezes our of this.
	 */
	constants: {
		INPUT_HEIGHT: "20px"
	}
};