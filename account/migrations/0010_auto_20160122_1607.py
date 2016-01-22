# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0009_auto_20160122_1557'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='max_cash_drift',
            field=models.DecimalField(default=100, max_digits=10, decimal_places=3),
        ),
        migrations.AddField(
            model_name='account',
            name='max_total_drift',
            field=models.DecimalField(default=100, max_digits=10, decimal_places=3),
        ),
    ]
