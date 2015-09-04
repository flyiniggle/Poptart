# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0002_auto_20150904_1539'),
    ]

    operations = [
        migrations.AlterField(
            model_name='security',
            name='segment',
            field=models.CharField(unique=True, max_length=20, choices=[(b'EQUITY', b'Equity'), (b'FIXED_INCOME', b'Fixed Income'), (b'CASH', b'Cash'), (b'AGGRESSIVE', b'Aggressive'), (b'GROWTH', b'Growth'), (b'INTERNATIONAL', b'International'), (b'INCOME', b'Income'), (b'REAL_ESTATE', b'Real Estate')]),
        ),
        migrations.DeleteModel(
            name='Segment',
        ),
    ]
