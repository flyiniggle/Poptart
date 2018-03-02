import Vue from "vue";
import { mount } from 'vue-test-utils';
import { assert } from "chai";
import { curry, findIndex, map, pick, pipe, pluck } from "ramda";

import Ribbon from "./Ribbon";
import TopMenu from "./TopMenu";
import * as TopMenuUtils from "./TopMenu";

describe("#Common #Views #TopMenu", function() {
	let ribbonMocks

	/*before(function() {
		ribbonMocks = ["a", "b", "c", "d"].reduce(function(template, name) {
				return `${template}<ribbon name="${name}" displayName="${name}"/>`;
			}, "");

		console.log(ribbonMocks)
	});*/

	describe("#getNameFromVNode", function() {
		it("should return the name data property from a VNode.", function() {
			console.log(TopMenu)
			const wrapper = mount(TopMenu, {
				propsData: {
					startingSelectedRibbon: "whatever"
				},
				slots: {
					//ribbons: Ribbon,
					navigatorControls: "<div></div>"
				}
			});
		});
	});
});