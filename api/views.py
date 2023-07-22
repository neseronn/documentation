from rest_framework.views import APIView
from rest_framework.response import Response
from collections import OrderedDict
from django.forms.models import model_to_dict
from rest_framework.permissions import AllowAny

from .serializers import *
from .models import *
from .common import responseDataAboutOneRecord, responseAllDataWithFilters
# Create your views here.
class GetArticleView(APIView):
    permission_classes = (AllowAny,)
    
    def get(self, request, id=None, format=None):
        if id != None:
            return Response(responseDataAboutOneRecord(id))
        else:
            category = request.GET.get('category', None)
            search = request.GET.get('search', None)
            tags = request.GET.get('tags')
            sort = request.GET.get('sort')
            return Response(responseAllDataWithFilters(category, tags, search, sort))
           
                
           
           