# Generated by Django 3.1.7 on 2021-03-18 10:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_auto_20210318_1525'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='questions',
            name='title',
        ),
    ]
