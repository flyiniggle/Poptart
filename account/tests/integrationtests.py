import simplejson
from django.test import TestCase, Client

from account.models import Account
from poptart.lib.serializers import ExtPythonSerializer
from poptart.lib.encoders import DateTimeWebAPIEncoder


class AccountMonitorTest(TestCase):
    fixtures = ['demodatadump.json']

    def test_get(self):
        c = Client()
        response = c.get('/account/')
        self.assertEqual(response.status_code, "200 OK", "Response status was not OK: {0}.".format(response.status_code))

        try:
            content = simplejson.loads(response.content)
        except simplejson.JSONDecodeError as e:
            self.fail("Response was not properly formatted JSON: %s. Exception: %s." % (response.content, e.message))

        self.assertTrue("total_accounts" in content, "No 'total_accounts' field was found.")
        self.assertTrue("accounts_data" in content, "No 'accounts_data' field was found.")
        self.assertIsInstance(content.get("total_accounts"), int, "The 'total_accounts' field was not an int.")
        self.assertIsInstance(content.get("accounts_data"), list, "The 'accounts_data' field was not a list.")
        self.assertEqual(content.get("total_accounts"), 100,
                         "total_accounts did not match expected value. Expected {0} and got {1}.".format(100, content.get("total_accounts")))
        self.assertEqual(len(content.get("accounts_data")), content.get("total_accounts"),
                         "total_accounts did not match the number of results returned.")

    def test_get_paging(self):
        c = Client()
        p_size = 10
        response = c.get('/account/', {"page_size": p_size})

        content = simplejson.loads(response.content)
        accounts = len(content.get("accounts_data"))
        self.assertEqual(accounts, p_size, "Expected {0} accounts but got {1}.".format(p_size, accounts))

        response = c.get('/account/', {"page_size": p_size, "current_page": 2})
        content = simplejson.loads(response.content)
        accounts = len(content.get("accounts_data"))
        self.assertEqual(accounts, p_size, "Expected {0} accounts on second page but got {1}.".format(p_size, accounts))

    def test_get_paging_out_of_bounds(self):
        c = Client()
        response = c.get('/account/', {"page_size": 1000})

        content = simplejson.loads(response.content)
        accounts = len(content.get("accounts_data"))
        self.assertEqual(accounts, 100, "Requesting too many accounts returned the wrong data.")

        response = c.get('/account/', {"page_size": 10, "current_page": 20})

        content = simplejson.loads(response.content)
        self.assertEqual(len(content.get("accounts_data")), 0, "Expected 0 accounts but got {0}.".format(len(content.get("accounts_data"))))

    def test_get_sorted(self):
        c = Client()
        orderer = "name"
        response = c.get('/account/', {"order_by": orderer})

        content = simplejson.loads(response.content)
        accounts = Account.objects.all()
        accounts = accounts.order_by(orderer)

        json_accounts = ExtPythonSerializer().serialize(accounts)
        account_name_pairs = map(lambda got, exp: [got.get("name"), exp.get("name")], content.get("accounts_data"), json_accounts)
        for pair in account_name_pairs:
            self.assertEqual(pair[0], pair[1], "Account order did not match expected.")

    def test_create_account(self):
        c = Client()
        post_data = {
            "accountName": "test_create",
            "accountDescription": "woo, tests!",
            "startingCash": 100,
            "expectedCash": 200,
            "maxPositionDrift": 1000,
            "maxCashDrift": 50,
            "maxTotalDrift": 1000,
        }
        response = c.post('/account/', post_data)

        self.assertEqual(response.status_code, "201 Created", "Expected '201 Created' status code but got '%s'." % response.status_code)
        try:
            new_account = Account.objects.get(name=post_data.get("accountName"))
        except Account.DoesNotExist:
            self.fail("Did not find the newly created account.")
        serialized_account = ExtPythonSerializer().serialize(new_account)
        self.assertJSONEqual(response.content, simplejson.dumps(serialized_account, cls=DateTimeWebAPIEncoder), "New account was not serialized correctly.")