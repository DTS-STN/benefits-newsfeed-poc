from django.contrib import admin
from .models import NewsItem


class NewsItemAdmin(admin.ModelAdmin):
    list_display = ["en_title","program","tag","date","draft"]


admin.site.register(NewsItem,NewsItemAdmin)