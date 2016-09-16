from django.db import models


class Security(models.Model):
    ticker = models.CharField(unique=True, max_length=20)
    description = models.CharField(max_length=100, null=True)
    CUSIP = models.CharField(unique=True, max_length=9)
    segment = models.ForeignKey('securitymanager.AssetClass', unique=False, default=12, db_column="segment")
    last_price = models.DecimalField(default=1, decimal_places=2, max_digits=7)

    def __str__(self):
        return str(self.ticker)

    def __unicode__(self):
        return unicode(self.ticker)


class AssetClass(models.Model):
    name = models.CharField(unique=True, max_length=255)

    def __str__(self):
        return str(self.name)

    def __unicode__(self):
        return unicode(self.name)