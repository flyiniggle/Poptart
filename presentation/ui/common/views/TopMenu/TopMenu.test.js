import Vue from "vue";
import { mount } from 'vue-test-utils';
import { assert } from "chai";
import { curry, findIndex, map, pick, pipe, pluck } from "ramda";

import Ribbon from "./Ribbon";
import TopMenu from "./TopMenu";
import * as TopMenuUtils from "./TopMenu";

describe("#Common #Views #TopMenu", function() {
	const ribbonMockFactory = function(name) {
		return {
			render(h) {
				return h(Ribbon,  { props: { name: name, displayName: name}});
			}
		}
	}
	let ribbonMocks

	before(function() {
		ribbonMocks = ["a", "b", "c", "d"].map(ribbonMockFactory);
		/*ribbonMocks = ["a", "b", "c", "d"].reduce(function(template, name) {
				return `${template}<Ribbon name="${name}" displayName="${name}"/>`;
			}, "");*/
		console.log(ribbonMocks)
	});

	describe("#getNameFromVNode", function() {
		it("should return the name data property from a VNode.", function() {
			const wrapper = mount(Ribbon, {
				propsData: {
					name: "whatever",
					displayName: "whatever"
				}
			});

			console.log(wrapper.vm)
			console.log(TopMenuUtils.getVNodeProps(wrapper.vm.$slots.ribbons[0].children))
		});
	});
});