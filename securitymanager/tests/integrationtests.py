import simplejson

from django.test import TestCase, Client


class SecurityManagerTest(TestCase):
    fixtures = ['demodatadump.json']

    def test_get_securities(self):
        c = Client()
        response = c.get('/securities/')

        self.assertEqual(response.status_code, "200 OK", "Response status was not OK: {0}.".format(response.status_code))

        try:
            content = simplejson.loads(response.content)
        except simplejson.JSONDecodeError as e:
            self.fail("Response was not properly formatted JSON: %s. Exception: %s." % (response.content, e.message))

        self.assertEqual(len(content), 213, "Expected 213 securities but got {0}.".format(len(content)))

        for security in content:
            self.assertTrue("CUSIP" in security, "Security missing CUSIP.")
            self.assertTrue("ticker" in security, "Security missing ticker.")

    def test_get_summary(self):
        c = Client()
        response = c.get('/securities/summary')

        try:
            content = simplejson.loads(response.content)
        except simplejson.JSONDecodeError as e:
            self.fail("Response was not properly formatted JSON: %s. Exception: %s." % (response.content, e.message))

        self.assertEqual(response.status_code, "200 OK", "Response status was not OK: {0}.".format(response.status_code))
        self.assertEqual(content.get("total_count"), 213, "Summary's total count returned {0} instead of 213.".format(content.get("total_count")))

    def test_get_security(self):
        c = Client()
        response = c.get('/securities/F/')
        expected_data = {'CUSIP': '345370860', 'description': 'Ford Motor', 'ticker': 'F', 'last_price': '16.00', 'segment': 13}

        try:
            content = simplejson.loads(response.content)
        except simplejson.JSONDecodeError as e:
            self.fail("Response was not properly formatted JSON: %s. Exception: %s." % (response.content, e.message))

        self.assertEqual(response.status_code, "200 OK", "Response status was not OK: {0}.".format(response.status_code))
        self.assertEqual(len(content), 1, "Get security did not return only one result: %s" % response.content)
        sec = content[0]
        self.assertEqual(sec.get("CUSIP"), expected_data.get("CUSIP"), "CUSIPS did not match. Expected %s and got %s." % (expected_data.get("CUSIP"), sec.get("CUSIP")))
        self.assertEqual(sec.get("description"), expected_data.get("description"), "Descriptions did not match. Expected %s and got %s." % (expected_data.get("description"), sec.get("description")))
        self.assertEqual(sec.get("ticker"), expected_data.get("ticker"), "Tickers did not match. Expected %s and got %s." % (expected_data.get("ticker"), sec.get("ticker")))
        self.assertEqual(sec.get("last_price"), expected_data.get("last_price"), "Prices did not match. Expected %s and got %s." % (expected_data.get("last_price"), sec.get("last_price")))
        self.assertEqual(sec.get("segment"), expected_data.get("segment"), "Segments did not match. Expected %s and got %s." % (expected_data.get("segment"), sec.get("segment")))

    def test_get_asset_classes(self):
        c = Client()
        response = c.get('/securities/asset_classes')

        self.assertEqual(response.status_code, "200 OK", "Response status was not OK: {0}.".format(response.status_code))
        try:
            content = simplejson.loads(response.content)
        except simplejson.JSONDecodeError as e:
            self.fail("Response was not properly formatted JSON: %s. Exception: %s." % (response.content, e.message))

        self.assertEqual(len(content), 26, "Expected 26 securities but got {0}.".format(len(content)))

        for ac in content:
            self.assertTrue("name" in ac, "Asset class had no property 'name.'")

    def test_get_asset_class(self):
        c = Client()
        response = c.get('/securities/asset_class/40/')
        expected_name = "Small Cap Equity"

        try:
            content = simplejson.loads(response.content)
        except simplejson.JSONDecodeError as e:
            self.fail("Response was not properly formatted JSON: %s. Exception: %s." % (response.content, e.message))

        self.assertEqual(response.status_code, "200 OK", "Response status was not OK: {0}.".format(response.status_code))
        self.assertEqual(len(content), 1, "Get asset class did not return only one result: %s" % response.content)
        ac = content[0]
        self.assertEqual(ac.get("name").strip(), expected_name, "Names did not match. Expected %s and got %s." % (expected_name, ac.get("name".strip())))