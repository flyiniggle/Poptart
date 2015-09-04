from django.db import models


class Segment(models.Model):
    SEGMENT_CHOICES = (
        ('EQUITY', 'Equity'),
        ('FIXED_INCOME', 'Fixed Income'),
        ('CASH', 'Cash'),
        ('AGGRESSIVE', 'Aggressive'),
        ('GROWTH', 'Growth'),
        ('INTERNATIONAL', 'International'),
        ('INCOME', 'Income'),
        ('REAL_ESTATE', 'Real Estate'),
    )
    segment = models.CharField(max_length=1, choices=SEGMENT_CHOICES)
    name = models.CharField(unique=True, max_length=100)

    def __str__(self):
        return str(self.name)

    def __unicode__(self):
        return unicode(self.name)


class Security(models.Model):
    ticker = models.CharField(unique=True, max_length=2)
    CUSIP = models.CharField(unique=True, max_length=9)
    segment = models.ForeignKey('Segment')

    def __str__(self):
        return str(self.ticker)

    def __unicode__(self):
        return unicode(self.ticker)