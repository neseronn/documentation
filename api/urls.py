from django.urls import path
from .views import *

urlpatterns = [
   path('articles/', GetArticleView.as_view(), name='short_info_about_articles'),
   path('articles/<int:id>', GetArticleView.as_view(), name='current_articles'),
]