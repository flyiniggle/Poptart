from django.db import models


class Security(models.Model):
    SEGMENT_CHOICES = (
        ('Equity', 'Equity'),
        ('Fixed Income', 'Fixed Income'),
        ('Cash', 'Cash'),
        ('Aggressive', 'Aggressive'),
        ('Growth', 'Growth'),
        ('International', 'International'),
        ('Income', 'Income'),
        ('Real Estate', 'Real Estate'),
    )
    ticker = models.CharField(unique=True, max_length=20)
    description = models.CharField(max_length=100, null=True)
    CUSIP = models.CharField(unique=True, max_length=9)
    segment = models.CharField(max_length=20, choices=SEGMENT_CHOICES)
    last_price = models.FloatField(default=1)

    def __str__(self):
        return str(self.ticker)

    def __unicode__(self):
        return unicode(self.ticker)