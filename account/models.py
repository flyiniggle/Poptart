from django.db import models


class Account(models.Model):
    name = models.CharField(unique=True, max_length=100)
    description = models.CharField(max_length=255, null=True)

    def __str__(self):
        return str(self.name)

    def __unicode__(self):
        return unicode(self.name)


class Holding(models.Model):
    security = models.ForeignKey('securitymanager.Security', unique=False)
    quantity = models.FloatField(default=1)
    expected_quantity = models.FloatField(default=1)
    account = models.ForeignKey('Account', null=True, unique=False)

    def __str__(self):
        return str("%s, %s" % (self.security, self.quantity))

    def __unicode__(self):
        return unicode("%s, %s" % (self.security, self.quantity))
