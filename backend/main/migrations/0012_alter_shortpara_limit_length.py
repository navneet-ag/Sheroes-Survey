# Generated by Django 3.2 on 2021-05-03 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_auto_20210502_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shortpara',
            name='limit_length',
            field=models.BigIntegerField(default=100, null=True),
        ),
    ]
