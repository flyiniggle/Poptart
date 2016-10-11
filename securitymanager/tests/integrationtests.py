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
