from decimal import Decimal

from securitymanager.models import Security


class AccountTestAccountSettings(object):
    name = "TestAccount01"
    description = "This is a test"
    total_cash = Decimal("500000")
    expected_cash = Decimal("450000")
    max_position_drift = Decimal("50000")
    max_cash_drift = Decimal("10000")
    max_total_drift = Decimal("10000")
    solution_name = "AssetAlloc"
    manager = 5
    client = 20


class AccountTestHoldingSettings(object):
    get = Security.objects.get
    securities = ["ALL", "F", "BD", "GOLD"]
    quantities = [100, 500, 400, 500]
    expected_quantities = [120, 500, 400, 600]
    expected_values = [Decimal("5000"), Decimal("100000"), Decimal("10000"), Decimal("100000")]

    def get_settings(self):
        count = 3
        while count >= 0:
            yield dict(security_name=self.securities[count],
                       quantity=self.quantities[count],
                       expected_quantity=self.expected_quantities[count],
                       expected_value=self.expected_values[count])
            count -= 1


class AccountTestSecuritySettings(object):
    tickers = ["ALL", "F", "BD", "GOLD"]
    descriptions = ["Allstate", "Ford", "Black & Decker", "Goldman Sachs"]
    CUSIP = ["1", "2", "3", "4"]
    prices = [Decimal("50"), Decimal("100"), Decimal("25"), Decimal("100")]

    def get_settings(self):
        count = 3
        while count >= 0:
            yield dict(ticker=self.tickers[count],
                       description=self.descriptions[count],
                       cusip=self.CUSIP[count],
                       price=self.prices[count])
            count -= 1