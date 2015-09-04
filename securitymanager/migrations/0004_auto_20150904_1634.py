# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0003_auto_20150904_1633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='security',
            name='segment',
            field=models.CharField(unique=True, max_length=20, choices=[(b'Equity', b'Equity'), (b'Fixed Income', b'Fixed Income'), (b'Cash', b'Cash'), (b'Aggressive', b'Aggressive'), (b'Growth', b'Growth'), (b'International', b'International'), (b'Income', b'Income'), (b'Real Estate', b'Real Estate')]),
        ),
    ]
