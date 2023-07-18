from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=150)
    decription = models.TextField()
    category = models.IntegerField()
    likes = models.IntegerField()
    create_data = models.DateField(auto_now_add=True)
    read_time = models.CharField(max_length=100)
    views = models.IntegerField()
    tags = ArrayField(models.CharField(max_length=50), null=True)
    content = models.ManyToManyField('ContentArticle')

    def __str__(self):
        return self.title 
           
class ContentArticle(models.Model):
    content_title = models.CharField(max_length=10)
    content_text = models.TextField()
    
    def __str__(self):
        return self.content_title