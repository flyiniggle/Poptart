# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='holdings',
        ),
        migrations.AddField(
            model_name='holding',
            name='account',
            field=models.ForeignKey(to='account.Account', null=True),
        ),
        migrations.AlterField(
            model_name='holding',
            name='expected_quantity',
            field=models.FloatField(default=1),
        ),
        migrations.AlterField(
            model_name='holding',
            name='quantity',
            field=models.FloatField(default=1),
        ),
    ]
