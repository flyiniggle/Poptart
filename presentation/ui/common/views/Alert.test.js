import { mount } from 'vue-test-utils';
import { assert } from "chai";
import Alert from './Alert';

describe("#Alert", function() {
	it("should return the error icon.", function () {
		const propsData = {
			level: "error"
		};
		const wrapper = mount(Alert, { propsData });

		assert.equal(wrapper.vm.$options.computed.icon.call(propsData), "ion-minus-circled");
	});

	it("should return the warning icon.", function () {
		const propsData = {
			level: "warning"
		};
		const wrapper = mount(Alert, { propsData });

		assert.equal(wrapper.vm.$options.computed.icon.call(propsData), "ion-alert-circled");
	});

	it("should return the info icon.", function () {
		const propsData = {
			level: "info"
		};
		const wrapper = mount(Alert, { propsData });

		assert.equal(wrapper.vm.$options.computed.icon.call(propsData), "ion-information-circled");
	});
});