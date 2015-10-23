# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_account_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='client_1_id',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='inception_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='last_update',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='manager',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='max_pos_drift',
            field=models.DecimalField(null=True, max_digits=10, decimal_places=4),
        ),
        migrations.AddField(
            model_name='account',
            name='solution_name',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='total_cash',
            field=models.DecimalField(null=True, max_digits=17, decimal_places=2),
        ),
    ]
