// Poptart.Ignite
////////////////////////////////
import jQuery from "Lib/Poptart.jQuery";
import "jqueryui";
import { nunjucks, nunjucksEnvironment } from "Lib/Poptart.Nunjucks";


//hack to "fix" some weird ass thing where the combo throws an error complaining that ig.encode doesn't exist.
window.jQuery.ig.encode = (val) => val;

const constants = {
	INPUT_HEIGHT: "20px"
};


export { constants };