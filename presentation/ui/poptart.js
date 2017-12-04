// Poptart
////////////////////////////////

import jQuery from "jquery";
import nunjucks from "nunjucks";
import ko from "knockout";

import RibbonMenu from "Poptart/components/Poptart.RibbonMenu";

//Global Setup
///////////////

// Nunucks
const nunjucksPrecompiled = {};
const nunjucksEnvironment = new nunjucks.Environment(new nunjucks.PrecompiledLoader(Object.create(nunjucksPrecompiled, {})), {web: {useCache: false}, noCache: true});
//nunjucks.configure('/templates', {web: {useCache: false}, noCache: true});

// Knockout
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

//Register knockout bindings3
/////////////////////////////////
ko.bindingHandlers.IgCurrencyEditor = {
	init: function(element, valueAccessor) {
		jQuery(element).on("igcurrencyeditortextchanged", function() {
			valueAccessor()(jQuery(this).igCurrencyEditor("value"));
		});
	}
};

/*ko.bindingHandlers.IgPercentEditor = {
	init: function(element, valueAccessor) {
		jQuery(element).on("igpercenteditortextchanged", function() {
			valueAccessor()(jQuery(this).igPercentEditor("value"));
		})
	},
	update: function(element, valueAccessor) {
		try {
			jQuery(element).igPercentEditor("value", valueAccessor()());
		} catch(e){}

	}
};*/

//Register knockout extenders
/////////////////////////////////
ko.extenders.CurrencyDisplay = function(target) {
	target.formattedValue = ko.observable();

	target.subscribe(function(value) {
		var floatValue = parseFloat(value),
			sign = "",
			i = 0,
			parts, intPart, formattedValue;

		if(isNaN(floatValue)) {
			target.formattedValue(". . .");
		}
		parts = floatValue.toFixed(2).toString().split(".");
		intPart = parts.shift().split("");
		formattedValue = [];

		if(floatValue < 0) {
			sign = intPart.shift();
		}

		while(intPart.length > 0) {
			if((i > 0) && !(i % 3)) {
				formattedValue.unshift(",");
			}
			formattedValue.unshift(intPart.pop());
			i++;
		}

		formattedValue.push(".");
		formattedValue.unshift(sign);
		formattedValue.unshift("$");

		target.formattedValue(formattedValue.concat(parts).join(""));
		target.value = floatValue;
	});

	return target;
};

ko.extenders.PercentDisplay = function(target) {
	target.formattedValue = ko.observable();

	target.subscribe(function(value) {
		var floatValue = parseFloat(value),
			formattedValue;

		if(isNaN(floatValue)) {
			target.formattedValue(". . .");
		}
		formattedValue = parseFloat(value).toFixed(3).toString();
		formattedValue += "%";

		target.formattedValue(formattedValue);
	});

	return target;
};

// Ignites
Object.defineProperty(ig,
	"tmpl",
	{
		value: function(template, data) {

			try {
				return nunjucksEnvironment.render(template, data);
			} catch(e) {
				return nunjucks.renderString(template, data);
			}
		},
		configurable: false
	}
);

ig.dependencies.push({
	widget: "Adding",
	parentWidget: "igGrid,igHierarchicalGrid",
	dependency: [{name: "igGrid"}, {name: "igEditors"}, {name: "igValidator"}, {name: "GridShared"}],
	scripts: ["/ui/components/Poptart.Ignite.Adding.min.js"]
});

/*jQuery.ig.dependencies.find(function(item) {
	return item.widget === "igGrid";
}).dependency.push({name: "igGridAdding"});*/

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

var hideNavMenu = function(event) {
	var relatedTarget = jQuery(event.relatedTarget);

	if((relatedTarget.attr("id") !== "mainNavMenuTarget")
			&& (relatedTarget.attr("id") !== "mainNavMenu")
			&& (relatedTarget.parents("#mainNavMenu").size() === 0)) {
		jQuery("#mainNavMenu").hide();
	}
};

export {
	init,
	nunjucksEnvironment
};
