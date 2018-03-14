import { mount } from '@vue/test-utils';
import { expect } from "chai";

import Navigator from './Navigator';

describe("#Navigator", function() {
	it("should show nav links when hovering on the main target.", function() {
		const wrapper = mount(Navigator, { attachToDocument: true });

		wrapper.find(".mainNavMenuTarget").trigger("mouseover");
		expect(wrapper.find(".mainNavMenu").isVisible()).to.be.true;
	});

	it("should hide nav links when leaving the main target.", function() {
		const wrapper = mount(Navigator, { attachToDocument: true });

		wrapper.setData({hovered: true});
		wrapper.find(".mainNavMenuTarget").trigger("mouseout");
		expect(wrapper.find(".mainNavMenu").isVisible()).to.be.false;
	});

	it("should hide nav links when leaving the links container.", function() {
		const wrapper = mount(Navigator, { attachToDocument: true });

		wrapper.setData({hovered: true});
		wrapper.find(".mainNavMenu").trigger("mouseout");
		expect(wrapper.find(".mainNavMenu").isVisible()).to.be.false;
	});
})