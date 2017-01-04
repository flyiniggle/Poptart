global.imports = function(name) {
	return require(path.join(__dirname, '..', '..', name));
};

var path = require('path');

var chai = require('chai');
//var sinon = require('sinon');
var assert = chai.assert;

const igniteDataAdapter = imports('/support/Ignite/DataAdapter.js');

describe("Ignite DataAdapter", function() {
	describe("#translateServerRequest", function() {
		const testParams = {
			current_page: 0,
			page_size: 100
		};

		it("should increment the current page parameter by 1", function() {
			var pageForServer = igniteDataAdapter.translateServerRequest(testParams);

			assert.strictEqual(pageForServer.current_page,
									1,
									"current_page parameter for server was not incremented correctly.");
		});
	});
});

describe("Alert", function() {
	var testInfo = {
			level: "info",
			summary: "summary",
			message: "message"
		},
		Alert = require('../../components/alerts/alert.js');

	it("should return a map", function() {
		var alert = new Alert(testInfo.level, testInfo.summary, testInfo.message);

		assert.isObject(alert, "Alert did not return a map.");
	});

	it("should have the correct attributes", function() {
		var alert = new Alert(testInfo.level, testInfo.summary, testInfo.message);

		assert.propertyVal(alert, "level", testInfo.level, "Level did not match expected.");
		assert.propertyVal(alert, "summary", testInfo.summary, "Summary did not match expected.");
		assert.propertyVal(alert, "message", testInfo.message, "Message did not match expected.");
	});

	it("should be info", function() {
		var alert = new Alert("info");

		assert.propertyVal(alert, "level", "info", "Level did not match expected: info.");
	});

	it("should be warning", function() {
		var alert = new Alert("warning");

		assert.propertyVal(alert, "level", "warning", "Level did not match expected: warning.");
	});

	it("should be error", function() {
		var alert = new Alert("error");

		assert.propertyVal(alert, "level", "error", "Level did not match expected: error.");
	});

	it("should throw an error if level is not valid", function() {
		assert.throws(function() {
			new Alert("green", testInfo.summary, testInfo.message);
		},
	   "Invalid level.",
	   "Alert did not throw an error when constructed with an invalid level");
	});

	describe("#stringify", function() {
		it("should return a valid json string", function() {
			var alert = new Alert(testInfo.level, testInfo.summary, testInfo.message),
				alertString = alert.stringify();

			assert.isString(alertString, "Stringify did not return a string.");
			assert.doesNotThrow(function() {
				JSON.parse(alertString);
			}, Error, "Result of stringify could not be parsed as JSON.");
		});
	});
});