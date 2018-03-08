import { assert } from "chai";

import * as Utils from "./Utils";

describe("#Poptart #Common #Views #Utils", function() {
	describe("#registerLocalComponent", function() {
		const fakeComponent = {
			$options: {
				components: {}
			}
		};

		it("should add new components to a component's list of registered sub-components.", function () {
			const fakeSubComponent = {};
			const subcomponents = { test: fakeSubComponent };

			Utils.registerLocalComponent(fakeComponent, subcomponents);
			assert.include(fakeComponent.$options.components, { test: fakeSubComponent });
		});

		it("should support partial application.", function() {
			const registerer = Utils.registerLocalComponent(fakeComponent);

			assert.isFunction(registerer);
		});
	});
});