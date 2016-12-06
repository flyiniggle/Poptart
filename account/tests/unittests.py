from django.utils import timezone
from django.test import TestCase

from account.models import Account, Holding
from securitymanager.models import AssetClass
from account.fixtures.testfixtures import *


class AccountTest(TestCase):

    def setUp(self):
        super(AccountTest, self).setUp()
        self.account_settings = AccountTestAccountSettings()
        self.holdings_settings = AccountTestHoldingSettings()
        self.securities_settings = AccountTestSecuritySettings()

        fi = AssetClass(name="Fixed Income")
        fi.save()

        account = Account(name=self.account_settings.name, description=self.account_settings.description, inception_date=timezone.now(),
                          total_cash=self.account_settings.total_cash, expected_cash=self.account_settings.expected_cash, max_pos_drift=self.account_settings.max_position_drift,
                          max_cash_drift=self.account_settings.max_cash_drift, max_total_drift=self.account_settings.max_total_drift, solution_name=self.account_settings.solution_name,
                          manager=self.account_settings.manager, client_1_id=self.account_settings.client, last_update=timezone.now())
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

        expected_holdings_value = sum([(quant * val) for quant, val in zip(self.holdings_settings.quantities, self.securities_settings.prices)])
        expected_value = self.account_settings.total_cash + expected_holdings_value
        self.assertEqual(expected_value, account.total_value,
                         "Account value calculation did not return the expected results. Expected {0} and got {1},".format(expected_value, account.total_value))

    def test_get_holdings_value(self):
        account = Account.objects.get(name=self.account_settings.name)
        expected_holdings_value = sum([(quant * val) for quant, val in zip(self.holdings_settings.quantities, self.securities_settings.prices)])

        self.assertEqual(account.total_holdings_value, expected_holdings_value,
                         "Account holdings value calculation did not return the expected results. Expected {0} and got {1},".format(expected_holdings_value, account.total_holdings_value))

    def test_get_total_expected_holdings_value(self):
        account = Account.objects.get(name=self.account_settings.name)
        expected_expected_holdings_value = Decimal(sum([val for val in self.holdings_settings.expected_values])).quantize(Decimal('1.00'))

        self.assertEqual(account.total_expected_holdings_value, expected_expected_holdings_value,
                         "Account expected holdings value calculation did not return the expected results. Expected {0} and got {1},".format(expected_expected_holdings_value, account.total_expected_holdings_value))

    def test_get_cash_drift(self):
        account = Account.objects.get(name=self.account_settings.name)

        expected_drift = abs(self.account_settings.expected_cash - self.account_settings.total_cash)

        self.assertEqual(account.cash_drift, expected_drift,
                         "Account cash drift calculation did not return the expected results. Expected {0} and got {1}.".format(expected_drift, account.cash_drift))

    def test_get_holdings_drift(self):
        account = Account.objects.get(name=self.account_settings.name)

        total_holdings_value = sum([(quant * val) for quant, val in zip(self.holdings_settings.quantities, self.securities_settings.prices)])
        total_expected_holdings_value = Decimal(sum([val for val in self.holdings_settings.expected_values])).quantize(Decimal('1.00'))

        expected_holdings_drift = abs(total_expected_holdings_value - total_holdings_value)

        self.assertEqual(account.holdings_drift, expected_holdings_drift,
                         "Account cash drift calculation did not return the expected results. Expected {0} and got {1}.".format(expected_holdings_drift, account.cash_drift))


class HoldingTest(TestCase):
    def setUp(self):
        super(HoldingTest, self).setUp()
        self.account_settings = AccountTestAccountSettings()
        self.holdings_settings = HoldingsTestHoldingSettings()
        self.securities_settings = HoldingsTestSecuritySettings()

        fi = AssetClass(name="Fixed Income")
        fi.save()

        self.account = Account(name=self.account_settings.name, description=self.account_settings.description, inception_date=timezone.now(),
                               total_cash=self.account_settings.total_cash, expected_cash=self.account_settings.expected_cash, max_pos_drift=self.account_settings.max_position_drift,
                               max_cash_drift=self.account_settings.max_cash_drift, max_total_drift=self.account_settings.max_total_drift, solution_name=self.account_settings.solution_name,
                               manager=self.account_settings.manager, client_1_id=self.account_settings.client, last_update=timezone.now())

        self.account.save()

        sec = self.securities_settings.get_settings()

        self.security = Security(ticker=sec.get("ticker"),
                                 description=sec.get("description"),
                                 CUSIP=sec.get("cusip"),
                                 segment=fi,
                                 last_price=sec.get("price"))

        self.security.save()

        h = self.holdings_settings.get_settings()
        holding = Holding(account=self.account,
                          security=self.security,
                          quantity=h.get("quantity"),
                          expected_quantity=h.get("expected_quantity"),
                          expected_value=h.get("expected_value"))

        holding.save()

    def test_get_value(self):
        holding = Holding.objects.get(security=self.security, account=self.account)

        expected_value = self.holdings_settings.quantity * self.securities_settings.price

        self.assertEqual(holding.value, expected_value,
                         "Holding value calculation did not return the expected results. Expected {0} and got {1}.".format(expected_value, holding.value))

    def test_get_quantity_drift(self):
        holding = Holding.objects.get(security=self.security, account=self.account)

        expected_quantity_drift = abs(self.holdings_settings.expected_quantity - self.holdings_settings.quantity)

        self.assertEqual(holding.quantity_drift, expected_quantity_drift,
                         "Holding value calculation did not return the expected results. Expected {0} and got {1}.".format(expected_quantity_drift, holding.quantity_drift))

