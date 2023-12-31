# Generated by Django 4.2.7 on 2023-11-22 06:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vms_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vehicle',
            name='DRIVER_ID',
        ),
        migrations.AlterField(
            model_name='auctionvehicle',
            name='image',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='driver',
            name='DRIVER_ID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='fuelingrecord',
            name='after_image',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='fuelingrecord',
            name='before_image',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='maintenancejob',
            name='replaced_part_image',
            field=models.CharField(max_length=50),
        ),
    ]
