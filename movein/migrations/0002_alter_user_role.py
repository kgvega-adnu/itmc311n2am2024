# Generated by Django 5.0.4 on 2024-10-21 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movein', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('OWNER', 'Owner'), ('TENANT', 'Tenant'), ('ADMIN', 'admin')], max_length=50),
        ),
    ]
