import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'first_project.settings')

import django
django.setup()

# fake script
import random
from faker import Faker
from first_app.models import AccessRecord, Topic, WebPage

fakegen = Faker()
topics = ['Search', 'Social', 'Marketplace', 'News', 'Game']


def add_topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t


def populate(N=5):
    for entry in range(N):
        # get the topic for the entry
        top = add_topic()

        # create the fake data for that entry
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_name = fakegen.company()

        # create new webpage entry
        webpg = WebPage.objects.get_or_create(
            topic=top, url=fake_url, name=fake_name)[0]

        # create a fake access record for that webpage
        acc_rec = AccessRecord.objects.get_or_create(
            name=webpg, date=fake_date)[0]


if __name__ == "__main__":
    print("inserting seed")
    populate(20)
    print("inserting done")
