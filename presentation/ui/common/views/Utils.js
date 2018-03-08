import { curry } from "ramda";

const registerLocalComponent = curry(function(parent, child) {
	Object.assign(parent.$options.components, child);
});

export {
	registerLocalComponent
};