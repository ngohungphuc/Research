from django.db import models

# Create your models here.


class Movie(models.Model):
    NOT_RATED = 0
    RATED_G = 1
    RATED_PG = 2
    RATED_R = 3
    RATING = (
        (NOT_RATED, 'NR - Not Rated'),
        (RATED_G, 'G - General Audiences'),
        (RATED_PG, 'PG - Parental Guidance' 'Suggested'),
        (RATED_R, 'R - Restricted')
    )

    title = models.CharField(max_length=140)
    plot = models.TextField()
    year = models.PositiveIntegerField()
    rating = models.IntegerField(choices=RATING, default=NOT_RATED)
    runtime = models.PositiveIntegerField()
    website = models.URLField(blank=True)

    def __str__(self):
        return '{} ({})'.format(self.title, self.year)
