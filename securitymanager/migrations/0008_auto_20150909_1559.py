# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('securitymanager', '0007_auto_20150904_1703'),
    ]

    operations = [
        migrations.CreateModel(
            name='AssetClass',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255)),
            ],
        ),
        migrations.RemoveField(
            model_name='security',
            name='segment',
        ),
        migrations.AddField(
            model_name='security',
            name='segment_id',
            field=models.ForeignKey(default=12, to='securitymanager.AssetClass'),
        ),
    ]
