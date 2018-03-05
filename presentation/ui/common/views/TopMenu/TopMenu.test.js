import Vue from "vue";
import { mount } from 'vue-test-utils';
import { assert } from "chai";

import Ribbon from "./Ribbon";
import TopMenu from "./TopMenu";
import * as TopMenuUtils from "./TopMenu";

describe("#Common #Views #TopMenu", function() {
	describe("#nameMenu", function() {
		it("should calculate a name property from a display name property.", function() {
			const start = { displayName: "stan" };
			const result = TopMenuUtils.nameMenu(start);

			assert.include(result, {name: "stan" }, "The resulting name property did not match expected.");
		});

		it("should lowercase and remove whitespace from the name property.", function() {
			const start = {displayName: "My Name is staN"};
			const result = TopMenuUtils.nameMenu(start);

			assert.include(result, {name: "mynameisstan"}, "The resulting name property did not match expected.");
		});

		it("should include starting values in the returned object.", function() {
			const testObj = {test: "test"};
			const start = {
				displayName: "My Name is staN",
				ribbon: testObj,
				lala: 1234
			};
			const expected = {
				displayName: "My Name is staN",
				name: "mynameisstan",
				ribbon: testObj,
				lala: 1234
			};
			const result = TopMenuUtils.nameMenu(start);

			assert.include(result, expected, "The resulting name property did not match expected.");
		});

		it("should throw an error if no display name is provided.", function() {

			assert.throws(TopMenuUtils.nameMenu.bind(null, {}), Error, "Ribbon menus must have a displayName provided.");
		});
	});

	describe("#isSelectedMenu", function() {
		it("should return true.", function() {
			assert.isTrue(TopMenuUtils.isSelectedRibbon("management", "management"));
		});

		it("should return false.", function() {
			assert.isFalse(TopMenuUtils.isSelectedRibbon("management", "editing"));
		});

		it("should curry.", function() {
			assert.isFunction(TopMenuUtils.isSelectedRibbon("management"));
		});
	});

	describe("#getIsSelectedRibbon", function() {
		it("should return true.", function() {
			assert.isTrue(TopMenuUtils.getIsSelectedRibbon("management", { name: "management"} ));
		});

		it("should return false.", function() {
			assert.isFalse(TopMenuUtils.getIsSelectedRibbon("management", { name: "editing" }));
		});

		it("should curry.", function() {
			assert.isFunction(TopMenuUtils.getIsSelectedRibbon("management"));
		});
	});

	describe("#getSelectedMenu", function() {
		it("should return the management menu.", function() {
			const managementMenu = { name: "test" };
			const menus = [
				{
					name: "management",
					ribbon: managementMenu
				},
				{
					name: "account",
					ribbon: {}
				}];
			const result = TopMenuUtils.getSelectedMenu("management", menus);

			assert.equal(result, managementMenu);
		});

		it("should return nothing.", function() {
			const menus = [
				{
					name: "management",
					ribbon: {}
				},
				{
					name: "account",
					ribbon: {}
				}];
			const result = TopMenuUtils.getSelectedMenu("notmanagement", menus);

			assert.isUndefined(result);
		});
	});

	describe("#getRibbonLinkData", function() {
		const demoMenus = [
			{
				name: "management",
				displayName: "Management",
				ribbon: {}
			},
			{
				name: "account",
				displayName: "Account",
				ribbon: {}
			}];

		it("should return an array.", function() {
			const results = TopMenuUtils.getRibbonLinkData("", demoMenus);

			assert.lengthOf(results, 2);
		});

		it("should return ribbon link objects.", function() {
			const [ expected1, expected2 ] = [
				{
					name: "management",
					displayName: "Management",
					ribbon: {},
					isSelected: false
				},
				{
					name: "account",
					displayName: "Account",
					ribbon: {},
					isSelected: false
				}];
			const [results1, results2] = TopMenuUtils.getRibbonLinkData("", demoMenus);

			assert.equal(results1.name, expected1.name);
			assert.equal(results2.name, expected2.name);

			assert.equal(results1.displayName, expected1.displayName);
			assert.equal(results2.displayName, expected2.displayName);

			assert.isObject(results1.ribbon);
			assert.isObject(results2.ribbon);

			assert.equal(results1.isSelected, expected1.isSelected);
			assert.equal(results2.isSelected, expected2.isSelected);
		});

		it("should show management as selected.", function() {
			const [expected1, expected2] = [
				{
					name: "management",
					displayName: "Management",
					ribbon: {},
					isSelected: true
				},
				{
					name: "account",
					displayName: "Account",
					ribbon: {},
					isSelected: false
				}];
			const [results1, results2] = TopMenuUtils.getRibbonLinkData("management", demoMenus);

			assert.equal(results1.name, expected1.name);
			assert.equal(results2.name, expected2.name);

			assert.equal(results1.displayName, expected1.displayName);
			assert.equal(results2.displayName, expected2.displayName);

			assert.isObject(results1.ribbon);
			assert.isObject(results2.ribbon);

			assert.equal(results1.isSelected, expected1.isSelected);
			assert.equal(results2.isSelected, expected2.isSelected);
		});

		it("should show account as selected.", function() {
			const [expected1, expected2] = [
				{
					name: "management",
					displayName: "Management",
					ribbon: {},
					isSelected: true
				},
				{
					name: "account",
					displayName: "Account",
					ribbon: {},
					isSelected: false
				}];
			const [results1, results2] = TopMenuUtils.getRibbonLinkData("management", demoMenus);

			assert.equal(results1.name, expected1.name);
			assert.equal(results2.name, expected2.name);

			assert.equal(results1.displayName, expected1.displayName);
			assert.equal(results2.displayName, expected2.displayName);

			assert.isObject(results1.ribbon);
			assert.isObject(results2.ribbon);

			assert.equal(results1.isSelected, expected1.isSelected);
			assert.equal(results2.isSelected, expected2.isSelected);
		});

	});
});