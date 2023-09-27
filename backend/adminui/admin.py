from django.contrib import admin
from .models import NewsItem


class NewsItemAdmin(admin.ModelAdmin):
    list_display = ["title","program","tag","date"]


admin.site.register(NewsItem,NewsItemAdmin)