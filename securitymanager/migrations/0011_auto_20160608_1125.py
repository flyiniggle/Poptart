# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0010_auto_20150909_1619'),
    ]

    operations = [
        migrations.AlterField(
            model_name='security',
            name='last_price',
            field=models.DecimalField(default=1, max_digits=4, decimal_places=2),
        ),
    ]
