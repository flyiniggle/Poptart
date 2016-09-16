# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0011_auto_20160608_1125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='security',
            name='last_price',
            field=models.DecimalField(default=1, max_digits=7, decimal_places=2),
        ),
    ]
