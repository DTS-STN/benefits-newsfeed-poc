from django.db import models

class NewsItem(models.Model):
    program = models.CharField(max_length=255)
    date = models.DateField()
    tag = models.CharField(max_length=255)
    en_title = models.CharField(max_length=255)
    en_body = models.TextField(default="")
    fr_title = models.CharField(max_length=255)
    fr_body = models.TextField(default="")
    draft = models.BooleanField(default=True)