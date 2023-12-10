

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_review_createdat'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='createdAt',
        ),
    ]
