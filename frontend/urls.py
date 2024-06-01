from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('materiales/', views.materiales, name='materiales'),
    path('materiales/libros/', views.libros, name='libros'),
    path('materiales/musicas/', views.musicas, name='musicas'),
]
