# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0008_auto_20150909_1559'),
    ]

    operations = [
        migrations.AlterField(
            model_name='security',
            name='segment_id',
            field=models.ForeignKey(db_column=b'segment', default=12, to='securitymanager.AssetClass'),
        ),
    ]
