# Generated by Django 5.0.4 on 2024-04-20 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_room_created_at_alter_room_modified_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='modified_at',
        ),
        migrations.AlterField(
            model_name='room',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
