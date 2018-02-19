// Poptart.Ignite
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";
import "jqueryui";
import { nunjucks, nunjucksEnvironment } from "Lib/Poptart.Nunjucks";
import "Poptart/scripts/Ignite/infragistics.loader";


//hack to "fix" some weird ass thing where the combo throws an error complaining that ig.encode doesn't exist.
window.jQuery.ig.encode = (val) => val;

const constants = {
	INPUT_HEIGHT: "20px"
};

const loaderConfig = {
	scriptPath: '/ui/scripts/Ignite',
	cssPath: '/ui/css/ignite'
};

var loaderFunction = jQuery.ig.loader;

const loader = function(config) {
	var callback = config.ready;

	config.ready = function() {
		jQuery.ig.tmpl = function(template, data) {
			try {
				//Throws an error if a named template is not found
				return nunjucksEnvironment.render(template, data);
			} catch(e) {
				return nunjucks.renderString(template, data);
			}
		};

		callback();
	};

	loaderFunction(config);
};

jQuery.ig.dependencies.push({
	widget: "Adding",
	parentWidget: "igGrid,igHierarchicalGrid",
	dependency: [{name: "igGrid"}, {name: "igEditors"}, {name: "igValidator"}, {name: "GridShared"}],
	scripts: ["/ui/components/Poptart.Ignite.Adding.js"]
});

/*jQuery.ig.dependencies.find(function(item) {
	return item.widget === "igGrid";
}).dependency.push({name: "igGridAdding"});*/

export { constants, loaderConfig, loader };