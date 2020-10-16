from django.urls import path
from . import views

app_name = 'CALL'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about')
]