# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Security',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ticker', models.CharField(unique=True, max_length=2)),
                ('CUSIP', models.CharField(unique=True, max_length=9)),
            ],
        ),
        migrations.CreateModel(
            name='Segment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('segment', models.CharField(max_length=1, choices=[(b'EQUITY', b'Equity'), (b'FIXED_INCOME', b'Fixed Income'), (b'CASH', b'Cash'), (b'AGGRESSIVE', b'Aggressive'), (b'GROWTH', b'Growth'), (b'INTERNATIONAL', b'International'), (b'INCOME', b'Income'), (b'REAL_ESTATE', b'Real Estate')])),
                ('name', models.CharField(unique=True, max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='security',
            name='segment',
            field=models.ForeignKey(to='securitymanager.Segment'),
        ),
    ]
