var Poptart = function() {
	"use strict";

	var ReturnObj = {
		nunjucks: {},
		Monitor: {
			Account: {}
		},
		Dashboard: {}
	};

	//Global Setup
	///////////////

	// jQuery
	jQuery.noConflict();

	// Nunucks
	window.nunjucksPrecompiled = {};
	ReturnObj.nunjucks = new nunjucks.Environment(new nunjucks.PrecompiledLoader(Object.create(window.nunjucksPrecompiled, {})), {web: {useCache: false}, noCache: true})
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

	jQuery.fn.dataBind = jQuery.fn.dataBind || function(options) {
		return this.each(function() {
			var opts = jQuery.extend({}, jQuery.fn.dataBind.defaults, options),
				attr = render(opts);

			if(attr !== null && attr !== '') {
				jQuery(this).attr('data-bind', attr);
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
	console.log(jQuery.ig.tmpl)
	jQuery.ig.tmpl = function(template, data) {

		try {
			return Poptart.nunjucks.render(template, data);
		} catch(e) {
			return nunjucks.renderString(template, data);
		}
	};

	jQuery.ig.dependencies.push({
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

	ReturnObj.init = function() {
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

Poptart.RibbonMenu = function() {
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
			self.tab.removeClass("ribbonMenuTabUnselected").addClass("ribbonMenuTabSelected");
		};

		self.deselect = function() {
			self.ribbonMenu.hide();
			self.tab.removeClass("ribbonMenuTabSelected").addClass("ribbonMenuTabUnselected");
		};

		// Setup
		self.tab.one("click", showRibbonMenu.bind(self.tab));

	};

	ReturnObj.init = function() {
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
	},
	loaderConfig: {
		scriptPath: '/ui/scripts/ignite',
		cssPath: '/ui/css/ignite'
	}
};


//Polyfills
/////////////
/* eslint-disable */
if(!Array.prototype.find) {
	Object.defineProperty(Array.prototype, 'find', {
		value: function(predicate) {
			// 1. Let O be ? ToObject(this value).
			if(this === null) {
				throw new TypeError('"this" is null or not defined');
			}

			var o = Object(this);

			// 2. Let len be ? ToLength(? Get(O, "length")).
			var len = o.length >>> 0;

			// 3. If IsCallable(predicate) is false, throw a TypeError exception.
			if(typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}

			// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
			var thisArg = arguments[1];

			// 5. Let k be 0.
			var k = 0;

			// 6. Repeat, while k < len
			while(k < len) {
				// a. Let Pk be ! ToString(k).
				// b. Let kValue be ? Get(O, Pk).
				// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
				// d. If testResult is true, return kValue.
				var kValue = o[k];
				if(predicate.call(thisArg, kValue, k, o)) {
					return kValue;
				}
				// e. Increase k by 1.
				k++;
			}

			// 7. Return undefined.
			return undefined;
		}
	});
}

if(!Array.from) {
	Array.from = (function() {
		var toStr = Object.prototype.toString;
		var isCallable = function(fn) {
			return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		};
		var toInteger = function(value) {
			var number = Number(value);
			if(isNaN(number)) {
				return 0;
			}
			if(number === 0 || !isFinite(number)) {
				return number;
			}
			return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		};
		var maxSafeInteger = Math.pow(2, 53) - 1;
		var toLength = function(value) {
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};

		// The length property of the from method is 1.
		return function from(arrayLike/*, mapFn, thisArg */) {
			// 1. Let C be the this value.
			var C = this;

			// 2. Let items be ToObject(arrayLike).
			var items = Object(arrayLike);

			// 3. ReturnIfAbrupt(items).
			if(arrayLike == null) {
				throw new TypeError('Array.from requires an array-like object - not null or undefined');
			}

			// 4. If mapfn is undefined, then let mapping be false.
			var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
			var T;
			if(typeof mapFn !== 'undefined') {
				// 5. else
				// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
				if(!isCallable(mapFn)) {
					throw new TypeError('Array.from: when provided, the second argument must be a function');
				}

				// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
				if(arguments.length > 2) {
					T = arguments[2];
				}
			}

			// 10. Let lenValue be Get(items, "length").
			// 11. Let len be ToLength(lenValue).
			var len = toLength(items.length);

			// 13. If IsConstructor(C) is true, then
			// 13. a. Let A be the result of calling the [[Construct]] internal method
			// of C with an argument list containing the single item len.
			// 14. a. Else, Let A be ArrayCreate(len).
			var A = isCallable(C) ? Object(new C(len)) : new Array(len);

			// 16. Let k be 0.
			var k = 0;
			// 17. Repeat, while k < len… (also steps a - h)
			var kValue;
			while(k < len) {
				kValue = items[k];
				if(mapFn) {
					A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				} else {
					A[k] = kValue;
				}
				k += 1;
			}
			// 18. Let putStatus be Put(A, "length", len, true).
			A.length = len;
			// 20. Return A.
			return A;
		};
	}());
}
/* eslint-enable */