import Vue from "vue";
import { mount } from 'vue-test-utils';
import { assert, expect } from "chai";

import Ribbon from "./Ribbon";
import RibbonLink from "./RibbonLink";
import Navigator from "./Navigator";
import TopMenu from "./TopMenu";
import * as TopMenuUtils from "./TopMenu";

describe("#Common #Views #TopMenu", function() {
	describe("#Unit", function() {
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

	describe("#Integration", function() {
		const testMenuRibbons = [
			{
				displayName: "test1",
				ribbon: (h) => <div id="ribbon-test1" class="ribbon-test" />
			},
			{
				displayName: "test2",
				ribbon: (h) => <div id="ribbon-test2" class="ribbon-test" />
			},
			{
				displayName: "test3",
				ribbon: (h) => <div id="ribbon-test3" class="ribbon-test" />
			}
		];
		const generateTestMenu = function(menus = [], startingRibbon = "") {
			return {
				name: "test-TopMenu",
				components: {
					TopMenu,
					Ribbon,
					RibbonLink,
					Navigator
				},
				render: function (h) {
					return (
						<top-menu menuSettings={ menus } startingSelectedRibbon={ startingRibbon }>
							<div slot="navigatorControls">
								<a href="/">Dashboard</a>
							</div>
						</top-menu>
					)
				}
			}
		};

		it("should render three ribbon links.", function() {
			const menu = mount(generateTestMenu(testMenuRibbons));

			expect(menu.findAll(RibbonLink).length).to.equal(3);
		});

		it("should show display names in ribbon links.", function() {
			const menu = mount(generateTestMenu(testMenuRibbons));
			const menuLinks = menu.findAll(RibbonLink);

			expect(menuLinks.at(0).element.innerHTML).to.equal("test1");
			expect(menuLinks.at(1).element.innerHTML).to.equal("test2");
			expect(menuLinks.at(2).element.innerHTML).to.equal("test3");
		});

		it("should not show a ribbon on load when no starting ribbon is specified.", function() {
			const menu = mount(generateTestMenu(testMenuRibbons));

			expect(menu.findAll(".ribbon-test").length).to.equal(0);
		});

		it("should show a ribbon on load when one is specified.", function() {
			const menu = mount(generateTestMenu(testMenuRibbons, "test1"));

			expect(menu.findAll("#ribbon-test1").length).to.equal(1);
		});

		it("should show another ribbon on load when it is specified.", function() {
			const menu = mount(generateTestMenu(testMenuRibbons, "test2"));

			expect(menu.findAll("#ribbon-test2").length).to.equal(1);
		});

		it("should show a ribbon menu after a ribbon link is clicked.", function() {
			const menu = mount(generateTestMenu(testMenuRibbons));

			menu.find(".ribbonMenuTab").trigger("click");// Click the first ribbon link
			expect(menu.findAll("#ribbon-test1").length).to.equal(1);
		});

		it("should show a different ribbon menu after a ribbon link is clicked.", function() {
			const menu = mount(generateTestMenu(testMenuRibbons, "test1"));

			console.log(menu.findAll(".ribbonMenuTab"))
			menu.findAll(".ribbonMenuTab").at(2).trigger("click");
			expect(menu.findAll("#ribbon-test3").length).to.equal(1);
			expect(menu.findAll("#ribbon-test1").length).to.equal(0);
			expect(menu.findAll("#ribbon-test2").length).to.equal(0);
		});
	});
});