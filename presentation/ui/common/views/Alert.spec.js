import { mount } from 'vue-test-utils';
import { expect } from "chai";
import Alert from './Alert';

describe("#Alert", function() {
	it("should show default values.", function() {
		const vm = mount(Alert);

		expect(vm.find(".info")).to.exist;
		expect(vm.find(".alert_summary").element.innerHTML).to.equal("Uh-oh");
		expect(vm.find(".alert_message").element.innerHTML).to.equal("Something isn't quite right.");
	});

	it("should show as informational.", function() {
		const vm = mount(Alert, {
				propsData: {
					level: "info"
				}
			});

		expect(vm.find(".info")).to.exist;
	});

	it("should show as warning.", function() {
		const vm = mount(Alert, {
			propsData: {
				level: "warning"
			}
		});

		expect(vm.find(".warning")).to.exist;
	});

	it("should show as an error.", function() {
		const vm = mount(Alert, {
			propsData: {
				level: "error"
			}
		});

		expect(vm.find(".error")).to.exist;
	});

	it("should show a message.", function() {
		const message = "This is a message!";
		const vm = mount(Alert, {
			propsData: {
				message
			}
		});

		expect(vm.find(".alert_message").element.innerHTML).to.equal(message);
	});

	it("should show a summary.", function() {
		const summary = "This is a summary!";
		const vm = mount(Alert, {
			propsData: {
				summary
			}
		});

		expect(vm.find(".alert_summary").element.innerHTML).to.equal(summary);
	});
})
