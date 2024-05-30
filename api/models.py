from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.CharField(max_length=50)
    email = models.CharField(max_length=50)