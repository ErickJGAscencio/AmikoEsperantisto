from rest_framework import viewsets
from .models import UserProfile, Libro, Cancion
from .serializers import UserProfileSerializer, LibroSerializer, CancionSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
  queryset = UserProfile.objects.all()
  serializer_class = UserProfileSerializer

class LibroViewSet(viewsets.ModelViewSet):
  queryset = Libro.objects.all()
  serializer_class = LibroSerializer
  
class CancionViewSet(viewsets.ModelViewSet):
  queryset = Cancion.objects.all()
  serializer_class = CancionSerializer
