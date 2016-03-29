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

	$['fn']['dataBind'] = $['fn']['dataBind'] || function(options) {
		return this['each'](function() {
			var opts = $.extend({}, $['fn']['dataBind']['defaults'], options),
					attr = render(opts);
			if(attr != null && attr != '') {
				$(this)['attr']('data-bind', attr);
			}
		});
	};

	ko.components.loaders.unshift({
		loadTemplate: function(name, templateConfig, callback) {
			if(templateConfig.module) {
				// Uses jQuery's ajax facility to load the markup from a file
				var fullUrl = '/templates/' + templateConfig.module + "/" + templateConfig.name;
				$.get(fullUrl, function(markupString) {
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



	// Public methods
	///////////////////

	ReturnObj.init = function(){
		$("#mainNavMenuTarget").on("mouseover", showNavMenu);
		$("#mainNavMenuTarget, #mainNavMenu").on("mouseleave", hideNavMenu);
		ko.components.register("alerts", {
			createViewModel: Poptart.Alerts,
			template: {
				element: "alerts-template"
			}
		});
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
