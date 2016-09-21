import simplejson
from django.test import TestCase, Client


class AccountMonitorTest(TestCase):
    fixtures = ['demodatadump.json']

    def test_get(self):
        c = Client()
        response = c.get('/account/')
        self.assertEqual(response.status_code, "200 OK", "Response status was not OK: {0}.".format(response.status_code))

        try:
            content = simplejson.loads(response.content)
            self.assertTrue("total_accounts" in content, "No 'total_accounts' field was found.")
            self.assertTrue("accounts_data" in content, "No 'accounts_data' field was found.")
            self.assertIsInstance(content.get("total_accounts"), int, "The 'total_accounts' field was not an int.")
            self.assertIsInstance(content.get("accounts_data"), list, "The 'accounts_data' field was not a list.")
        except simplejson.JSONDecodeError as e:
            self.fail("Response was not properly formatted JSON: %s. Exception: %s" % (response.content, e.message))