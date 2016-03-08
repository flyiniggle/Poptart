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

	//Use nunjucks as the templating engine
	ko.nunjucksTemplateEngine = function(){};
	ko.nunjucksTemplateEngine.prototype = ko.utils.extend(new ko.templateEngine(), {
		renderTemplate: function(templateSource, bindingContext) {
			var html = nunjucks.render(templateSource, bindingContext['$data']);

			return ko.utils.parseHtmlFragment(html);
		},
		allowTemplateRewriting: false
	});
	ko.setTemplateEngine(new ko.nunjucksTemplateEngine());



	// Public methods
	///////////////////

	ReturnObj.init = function(){
		$("#mainNavMenuTarget").on("mouseover", showNavMenu);
		$("#mainNavMenuTarget, #mainNavMenu").on("mouseleave", hideNavMenu);
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
