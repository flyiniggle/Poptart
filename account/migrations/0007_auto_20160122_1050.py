# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_auto_20151023_1428'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='expected_casj',
            field=models.DecimalField(default=0, max_digits=17, decimal_places=2),
        ),
        migrations.AddField(
            model_name='holding',
            name='expected_value',
            field=models.DecimalField(default=0, max_digits=17, decimal_places=2),
        ),
        migrations.AlterField(
            model_name='account',
            name='total_cash',
            field=models.DecimalField(default=0, max_digits=17, decimal_places=2),
        ),
    ]
