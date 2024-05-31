from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('libros/', views.libros, name='libros'),
    path('materiales/', views.materiales, name='materiales'),
]
