# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0009_auto_20150909_1618'),
    ]

    operations = [
        migrations.RenameField(
            model_name='security',
            old_name='segment_id',
            new_name='segment',
        ),
    ]
