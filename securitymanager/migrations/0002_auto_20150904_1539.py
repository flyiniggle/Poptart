# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='segment',
            name='name',
        ),
        migrations.AlterField(
            model_name='segment',
            name='segment',
            field=models.CharField(unique=True, max_length=20, choices=[(b'EQUITY', b'Equity'), (b'FIXED_INCOME', b'Fixed Income'), (b'CASH', b'Cash'), (b'AGGRESSIVE', b'Aggressive'), (b'GROWTH', b'Growth'), (b'INTERNATIONAL', b'International'), (b'INCOME', b'Income'), (b'REAL_ESTATE', b'Real Estate')]),
        ),
    ]
