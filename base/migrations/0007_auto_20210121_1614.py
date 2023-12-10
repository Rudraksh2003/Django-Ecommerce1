
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_remove_order_createdat'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='createdAt',
        ),
        migrations.AddField(
            model_name='order',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
