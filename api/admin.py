from django.contrib import admin
from .models import UserProfile, Libro, Cancion
# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Libro)
admin.site.register(Cancion)