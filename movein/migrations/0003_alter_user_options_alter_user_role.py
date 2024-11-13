# Generated by Django 5.0.4 on 2024-11-05 03:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movein', '0002_alter_user_role'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'User', 'verbose_name_plural': 'Users'},
        ),
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('landlord', 'Landlord'), ('tenant', 'Tenant')], default='tenant', max_length=10),
        ),
    ]
