from django.urls import path, include, re_path
from . import views

urlpatterns = [
    re_path(r'^index', views.index, name='index'),
     re_path(r'^contactus', views.contact, name='contact'),
]
