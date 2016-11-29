global.imports = function(name) {
	return require(__dirname + '/' + name);
};

var chai = require('chai');
var assert = chai.assert;


describe("Alert", function() {
	var testInfo = {
			level: "info",
			summary: "summary",
			message: "message"
		},
		Alert = require('../../components/alerts/alert.js');

	it("should return a map", function() {
		var alert = new Alert(testInfo.level, testInfo.summary, testInfo.message);

		chai.assert.isObject(alert, "Alert did not return a map.");
	});

	it("should have the correct attributes", function() {
		var alert = new Alert(testInfo.level, testInfo.summary, testInfo.message);

		chai.assert.propertyVal(alert, "level", testInfo.level, "Level did not match expected.");
		chai.assert.propertyVal(alert, "summary", testInfo.summary, "Summary did not match expected.");
		chai.assert.propertyVal(alert, "message", testInfo.message, "Message did not match expected.");
	});

	it("should be info", function() {
		var alert = new Alert("info");

		chai.assert.propertyVal(alert, "level", "info", "Level did not match expected: info.");
	});

	it("should be warning", function() {
		var alert = new Alert("warning");

		chai.assert.propertyVal(alert, "level", "warning", "Level did not match expected: warning.");
	});

	it("should be error", function() {
		var alert = new Alert("error");

		chai.assert.propertyVal(alert, "level", "error", "Level did not match expected: error.");
	});

	it("should throw an error if level is not valid", function() {
		chai.assert.throws(function() {
								new Alert("green", testInfo.summary, testInfo.message);
							},
						   "Invalid level.",
						   "Alert did not throw an error when constructed with an invalid level");
	});

	describe("#stringify", function() {
		it("should return a valid json string", function() {
			var alert = new Alert(testInfo.level, testInfo.summary, testInfo.message),
				alertString = alert.stringify();

			chai.assert.isString(alertString, "Stringify did not return a string.");
			chai.assert.doesNotThrow(function() {
				JSON.parse(alertString);
			}, Error, "Result of stringify could not be parsed as JSON.");
		});
	});
});