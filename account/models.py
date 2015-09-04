from django.db import models


class Account(models.Model):
    name = models.CharField(unique=True, max_length=100)
    holdings = models.ForeignKey('Holding')


class Holding(models.Model):
    security = models.ForeignKey('securitymanager.Security')
    quantity = models.FloatField()
    expected_quantity = models.FloatField()
