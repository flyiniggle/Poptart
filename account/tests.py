from django.test import TestCase
from account.models import Account


class AccountTest(TestCase):
    def test_get_account(self):
        account = Account.objects.get(name="WCVsavings0")
        self.assertTrue(account, "oh boy")