from django.db import models


class Account(models.Model):
    name = models.CharField(unique=True, max_length=100)
    holdings = models.ForeignKey('Holding')

    def __str__(self):
        return str(self.name)

    def __unicode__(self):
        return unicode(self.name)


class Holding(models.Model):
    security = models.ForeignKey('securitymanager.Security')
    quantity = models.FloatField()
    expected_quantity = models.FloatField()

    def __str__(self):
        return str("%s, %s" % (self.security, self.quantity))

    def __unicode__(self):
        return unicode("%s, %s" % (self.security, self.quantity))
