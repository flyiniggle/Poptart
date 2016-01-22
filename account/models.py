from decimal import Decimal
from django.db import models


class Account(models.Model):
    name = models.CharField(unique=True, max_length=100)
    description = models.CharField(max_length=255, null=True)
    inception_date = models.DateTimeField(null=True)
    total_cash = models.DecimalField(default=0, decimal_places=2, max_digits=17)
    expected_cash = models.DecimalField(default=0, decimal_places=2, max_digits=17)
    max_pos_drift = models.DecimalField(default=100, decimal_places=3, max_digits=10)
    max_cash_drift = models.DecimalField(default=100, decimal_places=3, max_digits=10)
    max_total_drift = models.DecimalField(default=100, decimal_places=3, max_digits=10)
    last_update = models.DateTimeField(null=True)
    client_1_id = models.IntegerField(null=True)
    manager = models.IntegerField(null=True)
    solution_name = models.CharField(max_length=255, null=True)

    def __str__(self):
        return str(self.name)

    def __unicode__(self):
        return unicode(self.name)

    @property
    def holdings(self):
        return Holding.objects.filter(account=self)

    @property
    def total_holdings_value(self):
        holdings_values = Decimal(0)
        for holding in Holding.objects.filter(account=self):
            holdings_values += Decimal(holding.value)
        return float(holdings_values)

    @property
    def total_expected_holdings_value(self):
        holdings_expected_values = Decimal(0)
        for holding in Holding.objects.filter(account=self):
            holdings_expected_values += Decimal(holding.expected_value)
        return float(holdings_expected_values)

    @property
    def total_value(self):
        holdings_values = Decimal(0)
        for holding in Holding.objects.filter(account=self):
            holdings_values += Decimal(holding.value)
        return float(holdings_values + Decimal(self.total_cash))

    @property
    def total_expected_value(self):
        holdings_expected_values = Decimal(0)
        for holding in Holding.objects.filter(account=self):
            holdings_expected_values += Decimal(holding.expected_value)
        return float(holdings_expected_values + Decimal(self.total_cash))

    @property
    def cash_drift(self):
        return float(abs(self.total_cash - self.expected_cash))

    @property
    def holdings_drift(self):
        return float(abs(self.total_holdings_value - self.total_expected_holdings_value))

    @property
    def total_drift(self):
        return float(self.cash_drift + self.holdings_drift)


class Holding(models.Model):
    security = models.ForeignKey('securitymanager.Security', unique=False)
    quantity = models.FloatField(default=1)
    expected_quantity = models.FloatField(default=1)
    expected_value = models.DecimalField(default=0, decimal_places=2, max_digits=17)
    account = models.ForeignKey('Account', null=True, unique=False)

    def __str__(self):
        return str("%s, %s" % (self.security, self.quantity))

    def __unicode__(self):
        return unicode("%s, %s" % (self.security, self.quantity))

    @property
    def value(self):
        return float(self.quantity * self.security.last_price)

    @property
    def quantity_drift(self):
        return float(abs(self.quantity - self.expected_quantity))

    @property
    def value_drift(self):
        return float(abs(self.value - Decimal(self.expected_value)))

