import { mount } from 'vue-test-utils';
import { expect } from "chai";
import Summary from './Summary';


describe('Summary.vue', function() {
	const summaryTestData = {
		accountsCount: 140,
		recentlyUsed: "account1, account2, account3",
		securitiesCount: 538
	};

	it('should have display the total number of accounts.', function() {
		const vm = mount(Summary, {
				propsData: summaryTestData
			}),
			result = vm.find("#accountsCount").element.innerHTML;

		expect(parseInt(result)).to.equal(summaryTestData.accountsCount)
	});

	it('should have display recently used account names.', function() {
		const vm = mount(Summary, {
				propsData: summaryTestData
			}),
			result = vm.find("#recentlyUsed").element.innerHTML;

		expect(result).to.equal(summaryTestData.recentlyUsed)
	});

	it('should have display the total number of securities.', function() {
		const vm = mount(Summary, {
				propsData: summaryTestData
			}),
			result = vm.find("#securitiesCount").element.innerHTML;

		expect(parseInt(result)).to.equal(summaryTestData.securitiesCount)
	});
})
