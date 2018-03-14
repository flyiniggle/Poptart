import { mount } from '@vue/test-utils';
import { expect } from "chai";
import AlertsList from './AlertsList';

describe("#AlertsList", function() {
	it("should render a list of alerts.", function() {
		const propsData = { alerts: [{}, {}, {}]};
		const wrapper = mount(AlertsList, { propsData });
		const alerts = wrapper.findAll(".alert");

		expect(alerts).to.have.lengthOf(3);
	});
});