# Generated by Django 5.1.3 on 2024-11-25 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movein', '0007_user_phonenumber'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phonenumber',
            field=models.CharField(default=9123456789, max_length=10),
            preserve_default=False,
        ),
    ]
