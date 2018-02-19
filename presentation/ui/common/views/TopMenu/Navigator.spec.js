import { mount } from 'vue-test-utils';
import { expect } from "chai";
import Navigator from './Navigator';

describe("#Navigator", function() {
	it("should show nav links when hovering on the main target.", function() {
		const wrapper = mount(Navigator);

		wrapper.find(".mainNavMenuTarget").trigger("mouseover");
		expect(wrapper.find(".mainNavMenu")).to.be.visible;
	});

	it("should hide nav links when leaving the main target.", function() {
		const wrapper = mount(Navigator);

		wrapper.setData({hovered: true});
		wrapper.find(".mainNavMenuTarget").trigger("mouseout");
		expect(wrapper.find(".mainNavMenu")).to.be.not.visible;
	});

	it("should hide nav links when leaving the links container.", function() {
		const wrapper = mount(Navigator);

		wrapper.setData({hovered: true});
		wrapper.find(".mainNavMenu").trigger("mouseout");
		expect(wrapper.find(".mainNavMenu")).to.be.not.visible;
	});
})