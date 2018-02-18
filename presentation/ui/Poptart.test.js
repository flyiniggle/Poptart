import { assert } from "chai";

import * as Poptart from "Poptart/poptart";


describe("Poptart", function() {
	describe("#basic", function() {
		it("should return a map", function() {
			assert.isObject(Poptart, "Poptart is not a map.");
		});
	});
});