import { assert } from "chai";
import { HoldingsService, SecuritiesService } from "Poptart/modules/account/scripts/Poptart.Account.Service";

describe("#Poptart #Account #Service", function() {
	describe("#Holdings Service", function() {
		it("should return a formatted object", function() {
			let testData = {
				pk: 2,
				security: {
					CUSIP: 12345,
					ticker: "IBM",
					description: "This is a great description.",
					segment: "Equity",
					last_price: "50.00"
				},
				quantity: 100,
				expected_value: 1000,
				expected_quantity: 200,
			};
			let formattedData = HoldingsService.formatResponse([testData])[0];

			assert.equal(formattedData.pk,
				testData.pk,
				`Expected a pk of ${testData.pk} but got ${formattedData.pk}.`);
			assert.equal(formattedData.CUSIP,
				testData.security.CUSIP,
				`Expected a CUSIP of ${testData.security.CUSIP} but got ${formattedData.CUSIP}.`);
			assert.equal(formattedData.security,
				testData.security.description,
				`Expected a description of ${testData.security.description} but got ${formattedData.security}.`);
			assert.equal(formattedData.ticker,
				testData.security.ticker,
				`Expected a ticker of ${testData.security.ticker} but got ${formattedData.ticker}.`);
			assert.equal(formattedData.segment,
				testData.security.segment,
				`Expected a segment of ${testData.security.segment} but got ${formattedData.segment}.`);
			assert.equal(formattedData.quantity,
				testData.quantity,
				`Expected a quantity of ${testData.quantity} but got ${formattedData.quantity}.`);
			assert.equal(formattedData.expectedValue,
				testData.expected_value,
				`Expected a expectedValue of ${testData.expected_value} but got ${formattedData.expectedValue}.`);
			assert.equal(formattedData.expectedQuantity,
				testData.expected_quantity,
				`Expected a expectedQuantity of ${testData.expected_quantity} but got ${formattedData.expectedQuantity}.`);
			assert.equal(formattedData.lastPrice,
				testData.security.last_price,
				`Expected a lastPrice of ${testData.security.last_price} but got ${formattedData.lastPrice}.`);
		})
	})

	describe("#Securities Service", function() {
		it("Should return a formatted object.", function() {
			let testData = {
				pk: 1,
				CUSIP: 1234,
				ticker: "IBM",
				decription: "This, too, is a great description.",
				segment: "Equity",
				last_price: 50.12
			};
			let formattedReponse = SecuritiesService.formatResponse([testData])[0];

			assert.equal(formattedReponse.pk, testData.pk);
			assert.equal(formattedReponse.CUSIP, testData.CUSIP);
			assert.equal(formattedReponse.ticker, testData.ticker);
			assert.equal(formattedReponse.security, testData.description);
			assert.equal(formattedReponse.segment, testData.segment);
			assert.equal(formattedReponse.lastPrice, testData.last_price);
		})
	});
});