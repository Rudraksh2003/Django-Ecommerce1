
import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_auto_20210119_1500'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2021, 1, 22, 0, 6, 40, 181235, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
