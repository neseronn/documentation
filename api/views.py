from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import *
from collections import OrderedDict
from django.forms.models import model_to_dict
# Create your views here.
from rest_framework.permissions import AllowAny
class GetArticleView(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, id=None, format=None):
        if id != None:
            article_data = Articles.objects.get(id=id)
            dict_article_data = model_to_dict(article_data)
            all_content = list()
            for i in dict_article_data['content']:
                all_content.append(DataContentArticlesSerializer(i).data)
            datas = DataArticlesSerializer(article_data).data
            datas['content'] = all_content
            return Response(datas)
        else:
            allData = Articles.objects.all()
            serializers = ShortDataArticlesSerializer(allData, many=True)
            return Response(serializers.data)