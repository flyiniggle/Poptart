import datetime

from django.test import TestCase

from account.models import Account, Holding
from securitymanager.models import AssetClass
from account.testfixtures import *


class AccountTest(TestCase):

    def setUp(self):
        super(AccountTest, self).setUp()
        self.account_settings = AccountTestAccountSettings()
        self.holdings_settings = AccountTestHoldingSettings()
        self.securities_settings = AccountTestSecuritySettings()

        fi = AssetClass(name="Fixed Income")
        fi.save()

        account = Account(name=self.account_settings.name, description=self.account_settings.description, inception_date=datetime.datetime.now(),
                          total_cash=self.account_settings.total_cash, expected_cash=self.account_settings.expected_cash, max_pos_drift=self.account_settings.max_position_drift,
                          max_cash_drift=self.account_settings.max_cash_drift, max_total_drift=self.account_settings.max_total_drift, solution_name=self.account_settings.solution_name,
                          manager=self.account_settings.manager, client_1_id=self.account_settings.client, last_update=datetime.datetime.now())
        account.save()

        for sec in self.securities_settings.get_settings():
            Security(ticker=sec.get("ticker"),
                     description=sec.get("description"),
                     CUSIP=sec.get("cusip"),
                     segment=fi,
                     last_price=sec.get("price")).save()

        for holding in self.holdings_settings.get_settings():
            Holding(account=account,
                    security=Security.objects.get(ticker=holding.get("security_name")),
                    quantity=holding.get("quantity"),
                    expected_quantity=holding.get("expected_quantity"),
                    expected_value=holding.get("expected_value")).save()

    def tearDown(self):
        super(AccountTest, self).tearDown()
        Account.objects.get(name=self.account_settings.name).delete()

    def test_get_account_value(self):
        account = Account.objects.get(name=self.account_settings.name)

        expected_value = self.account_settings.expected_cash
        self.assertEqual(expected_value, account.total_value, "oh boy")