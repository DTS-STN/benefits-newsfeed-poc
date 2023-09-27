from rest_framework import serializers
from adminui.models import NewsItem

class NewsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = '__all__'