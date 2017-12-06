// Poptart.Ignite
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";
import { nunjucks, nunjucksEnvironment } from "Lib/Poptart.Nunjucks";
import "Poptart/scripts/Ignite/infragistics.loader";


const constants = {
	INPUT_HEIGHT: "20px"
};

const loaderConfig = {
	scriptPath: '/ui/scripts/ignite',
	cssPath: '/ui/css/ignite'
};

const loader = jQuery.ig.loader

Object.defineProperty(jQuery.ig,
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

jQuery.ig.dependencies.push({
	widget: "Adding",
	parentWidget: "igGrid,igHierarchicalGrid",
	dependency: [{name: "igGrid"}, {name: "igEditors"}, {name: "igValidator"}, {name: "GridShared"}],
	scripts: ["/ui/components/Poptart.Ignite.Adding.min.js"]
});

/*jQuery.ig.dependencies.find(function(item) {
	return item.widget === "igGrid";
}).dependency.push({name: "igGridAdding"});*/

export { constants, loaderConfig, loader };