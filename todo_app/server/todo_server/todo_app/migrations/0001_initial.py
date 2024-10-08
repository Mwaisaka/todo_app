# Generated by Django 4.2.16 on 2024-10-10 18:35

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task', models.CharField(max_length=255)),
                ('completed', models.BooleanField(default=False)),
                ('create_date', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
                ('due_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
