from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from adminui.models import NewsItem
from .serializers import NewsItemSerializer


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def getData(request):
    news_items = NewsItem.objects.all()
    serializer = NewsItemSerializer(news_items, many=True)
    return Response(serializer.data)