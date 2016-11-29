global.imports = function(name) {
	return require(__dirname + '/' + name);
};

var chai = require('chai');
var assert = chai.assert;


describe("Alert", function() {
	describe("#stringify", function() {
		var Alert = require('../../components/alerts/alert.js');

		it("should return a map", function() {
			var alert = new Alert("info", "summary", "message");

			chai.assert.isObject(alert, "Alert did not return a map.");
		});
	});
});