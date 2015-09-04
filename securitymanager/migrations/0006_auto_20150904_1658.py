# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0005_auto_20150904_1655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='security',
            name='description',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
