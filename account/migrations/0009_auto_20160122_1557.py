# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0008_auto_20160122_1052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='max_pos_drift',
            field=models.DecimalField(default=100, max_digits=10, decimal_places=3),
        ),
    ]
