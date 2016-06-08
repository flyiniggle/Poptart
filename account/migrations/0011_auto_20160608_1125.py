# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0010_auto_20160122_1607'),
    ]

    operations = [
        migrations.AlterField(
            model_name='holding',
            name='expected_quantity',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='holding',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
    ]
