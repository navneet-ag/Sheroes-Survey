# Generated by Django 3.1.7 on 2021-03-16 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20210316_1805'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forms',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
