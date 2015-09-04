# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0004_auto_20150904_1634'),
    ]

    operations = [
        migrations.AddField(
            model_name='security',
            name='description',
            field=models.CharField(max_length=100),
        ),
        migrations.AddField(
            model_name='security',
            name='last_price',
            field=models.FloatField(default=1),
        ),
        migrations.AlterField(
            model_name='security',
            name='ticker',
            field=models.CharField(unique=True, max_length=20),
        ),
    ]
