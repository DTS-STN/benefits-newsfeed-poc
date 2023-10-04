from django.urls import path
from . import views

urlpatterns = [
    path('api/v1/get-all-news-items', views.get_data),
    path('api/v1/get-news-items-by/<search>', views.get_data_by_search),
]