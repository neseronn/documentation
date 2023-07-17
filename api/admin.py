from django.contrib import admin
from .models import Articles, ContentArticle
# Register your models here.

admin.site.register(ContentArticle)
admin.site.register(Articles)