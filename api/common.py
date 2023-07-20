from .models import Articles
from django.forms.models import model_to_dict
from .serializers import *


def is_sublist(sublist, mainlist):
    return all(item in mainlist for item in sublist)

def responseDataAboutOneRecord(id):
    article_data = Articles.objects.get(id=id)
    dict_article_data = model_to_dict(article_data)
    all_content = list()
    for i in dict_article_data['content']:
        all_content.append(DataContentArticlesSerializer(i).data)
    datas = DataArticlesSerializer(article_data).data
    datas['content'] = all_content
    return datas

def responseAllDataAndFilterAboutCategoryAndTags(category, tags):
    if category is None:
        if tags is None:
            allData = Articles.objects.all()
            serializers = ShortDataArticlesSerializer(allData, many=True)
            return serializers.data
        else:
            tags = tags.split(',')
            allData = Articles.objects.all()
            serializers = ShortDataArticlesSerializer(allData, many=True)
            responseData = list()
            for i in serializers.data:
                if (is_sublist(tags,i['tags'])):
                    responseData.append(i)
            return responseData
    else:
        if tags is None:
            allData = Articles.objects.filter(category=category)
            serializers = ShortDataArticlesSerializer(allData, many=True)
            return serializers.data
        else:
            tags = tags.split(',')
            allData = Articles.objects.filter(category=category)
            serializers = ShortDataArticlesSerializer(allData, many=True)
            responseData = list()
            for i in serializers.data:
                if (is_sublist(tags,i['tags'])):
                    responseData.append(i)
            return responseData
