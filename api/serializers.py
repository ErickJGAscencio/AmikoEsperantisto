from rest_framework import serializers
from .models import UserProfile, Libro, Cancion


class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserProfile
    fields = '__all__'
    
class LibroSerializer(serializers.ModelSerializer):
  class Meta:
    model = Libro
    fields = '__all__'
    
class CancionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cancion
    fields = '__all__'