# Generated by Django 3.1.7 on 2021-04-17 19:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='OurUsers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(max_length=30, unique=True)),
                ('first_name', models.CharField(max_length=500, null=True)),
                ('last_name', models.CharField(max_length=500, null=True)),
                ('email', models.EmailField(max_length=64, unique=True, verbose_name='email')),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Short'), ('O', 'Other')], default='F', max_length=2)),
                ('partner_id', models.BigIntegerField(null=True)),
                ('sheroes_id', models.BigIntegerField(null=True)),
                ('user_type', models.CharField(choices=[('AD', 'Admin'), ('CR', 'Creator'), ('EU', 'End User')], default='EU', max_length=2)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Forms',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.TextField(max_length=50, null=True)),
                ('banner_toggle', models.BooleanField(default=False)),
                ('banner_path', models.CharField(max_length=500, null=True)),
                ('description', models.TextField(null=True)),
                ('section_sequence', models.JSONField()),
                ('consent_toggle', models.BooleanField(default=False)),
                ('consent_text', models.TextField(null=True)),
                ('start_time', models.DateTimeField(null=True)),
                ('end_time', models.DateTimeField(null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('edit_response_toggle', models.BooleanField(default=False)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='form_created_by', to=settings.AUTH_USER_MODEL)),
                ('updated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='form_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('statement', models.TextField()),
                ('qtype', models.CharField(choices=[('MC', 'Multiple Choice'), ('SP', 'Short Para'), ('LP', 'Long Para'), ('FU', 'File Upload')], max_length=2)),
                ('mandatory_toggle', models.BooleanField(default=False)),
                ('image_toggle_1', models.BooleanField(default=False)),
                ('image_path_1', models.CharField(max_length=500, null=True)),
                ('image_toggle_2', models.BooleanField(default=False)),
                ('image_path_2', models.CharField(max_length=500, null=True)),
                ('quiz_toggle', models.BooleanField(default=False)),
                ('correct_score', models.IntegerField(default=0, null=True)),
                ('incorrect_score', models.IntegerField(default=0, null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question_created_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ShortPara',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('limit_length', models.BigIntegerField()),
                ('datatype', models.CharField(choices=[('TXT', 'Text'), ('INT', 'Integer'), ('FLT', 'Float')], default='TXT', max_length=3)),
                ('correct_answer', models.TextField(max_length=5000)),
                ('question_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.questions')),
            ],
        ),
        migrations.CreateModel(
            name='Sections',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.TextField(max_length=50, null=True)),
                ('description', models.TextField(max_length=50, null=True)),
                ('question_sequence', models.JSONField()),
                ('randomize_toggle', models.BooleanField(default=False)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='section_created_by', to=settings.AUTH_USER_MODEL)),
                ('form_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.forms')),
                ('updated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='section_updated_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Responses',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('response', models.JSONField()),
                ('form_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.forms')),
                ('question_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.questions')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='questions',
            name='section_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.sections'),
        ),
        migrations.AddField(
            model_name='questions',
            name='updated_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question_updated_by', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Options',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=255)),
                ('image_toggle', models.BooleanField(default=False)),
                ('image_path', models.CharField(max_length=500, null=True)),
                ('correct_answer', models.BooleanField(default=False)),
                ('question_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.questions')),
            ],
        ),
        migrations.CreateModel(
            name='FileUpload',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('limit_mb', models.FloatField()),
                ('file_extenstion', models.CharField(max_length=10)),
                ('question_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.questions')),
            ],
        ),
        migrations.CreateModel(
            name='Dropdown',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dropdown_json', models.JSONField()),
                ('correct_answer', models.CharField(max_length=256, null=True)),
                ('question_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.questions')),
            ],
        ),
    ]
