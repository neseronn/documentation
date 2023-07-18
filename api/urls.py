from django.urls import path
from .views import *

urlpatterns = [
   path('article/', GetArticleView.as_view(), name='short_info_about_articles'),
   path('article/<int:id>', GetArticleView.as_view(), name='current_articles'),
]