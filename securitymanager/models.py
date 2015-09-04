from django.db import models


class Segment(models.Model):
    name = models.CharField(unique=True)


class Security(models.Model):
    ticker = models.CharField(unique=True)
    CUSIP = models.CharField(unique=True, max_length=9)
    segment = models.ForeignKey('Segment')