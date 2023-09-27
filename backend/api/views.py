from rest_framework.response import Response
from rest_framework.decorators import api_view
from adminui.models import NewsItem
from .serializers import NewsItemSerializer


@api_view(['GET'])
def getData(request):
    news_items = NewsItem.objects.all()
    serializer = NewsItemSerializer(news_items, many=True)
    return Response(serializer.data)