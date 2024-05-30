from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'usersprofile', views.UserProfileViewSet)
router.register(r'libro', views.LibroViewSet)
router.register(r'cancion', views.CancionViewSet)

urlpatterns=[
  path('', include(router.urls))
]