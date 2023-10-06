from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from adminui.models import NewsItem
from .serializers import NewsItemSerializer


## todo: uncomment decorators at a later time, for now any request can access during development


@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def get_data(request):
    news_items = NewsItem.objects.filter(draft=False).order_by('-date')
    serializer = NewsItemSerializer(news_items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def get_data_by_search(request,search):
    news_items = NewsItem.objects.filter(title__icontains=search) | NewsItem.objects.filter(program__icontains=search) | \
        NewsItem.objects.filter(body__icontains=search) | NewsItem.objects.filter(tag__icontains=search)
    serializer = NewsItemSerializer(news_items, many=True)
    return Response(serializer.data)