from rest_framework import serializers
from django.db.models.fields import DateField

from .models import Articles, ContentArticle

class DataContentArticlesSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    content_title = serializers.CharField(max_length=10)
    content_text = serializers.CharField()
         
class DataArticlesSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=150)
    decription = serializers.CharField()
    category = serializers.IntegerField()
    likes = serializers.IntegerField()
    create_data = serializers.DateField()
    read_time = serializers.CharField(max_length=100)
    views = serializers.IntegerField()
    tags = serializers.ListField(child=serializers.CharField())
    
class ShortDataArticlesSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=150)
    decription = serializers.CharField()
    category = serializers.IntegerField()
    likes = serializers.IntegerField()
    create_data = serializers.DateField()
    tags = serializers.ListField(child=serializers.CharField())
