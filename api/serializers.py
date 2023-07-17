from rest_framework import serializers

from .models import Articles, ContentArticle

class DataContentArticlesSerializer(serializers.Serializer):
    class Meta:
        model = ContentArticle
        exclude = ('id',)
        
class DataArticlesSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=150)
    decription = serializers.TextField()
    category = serializers.IntegerField()
    likes = serializers.IntegerField()
    create_data = serializers.DataFiels()
    read_time = serializers.CharField(max_length=100)
    views = serializers.IntegerField()
    content = DataContentArticlesSerializer(many=True)
