from django.forms.models import model_to_dict

from .serializers import *
from .models import Articles

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

def responseAllDataWithFilters(category, tags, search, sort):
    allData = Articles.objects.all()
    
    if search is not None:
        allData = allData.filter(title__icontains=search)
    
    if category is not None:
        allData = allData.filter(category=category)    
    if sort is not None:
        allData = allData.order_by(f'-{sort}')
    if tags is not None:
        tags = tags.split(',')
        serializers = ShortDataArticlesSerializer(allData, many=True)
        responseData = list()
        for i in serializers.data:
            if (is_sublist(tags,i['tags'])):
                responseData.append(i)
        return responseData
    
    serializers = ShortDataArticlesSerializer(allData, many=True)
    return serializers.data
