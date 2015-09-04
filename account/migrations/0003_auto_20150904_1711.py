# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20150904_1708'),
    ]

    operations = [
        migrations.AlterField(
            model_name='holding',
            name='account',
            field=models.OneToOneField(null=True, to='account.Account'),
        ),
        migrations.AlterField(
            model_name='holding',
            name='security',
            field=models.OneToOneField(to='securitymanager.Security'),
        ),
    ]
