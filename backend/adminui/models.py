from django.db import models

class NewsItem(models.Model):
    program = models.CharField(max_length=255)
    date = models.DateField()
    tag = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    body = models.TextField()
