# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_auto_20160122_1050'),
    ]

    operations = [
        migrations.RenameField(
            model_name='account',
            old_name='expected_casj',
            new_name='expected_cash',
        ),
    ]
