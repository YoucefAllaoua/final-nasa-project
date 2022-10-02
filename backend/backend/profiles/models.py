from django.db import models
from django.contrib.auth.models import AbstractBaseUser , UserManager , PermissionsMixin
from uuid import uuid4
# Create your models here.
class ProfileManager(UserManager):
    def create_user(self , email , username,password=None) :
        email = self.normalize_email(email) 
        profile = self.model(email = email , username = username)
        profile.set_password(password)
        profile.save(using = self._db)
        return profile
    def create_superuser(self , email , username=None ,password=None) : 
        profile = self.create_user(email , username, password) 
        profile.is_superuser= True
        profile.save(using= self._db)
        return profile
class Profile(AbstractBaseUser , PermissionsMixin) : 
    email = models.EmailField(max_length=255 , unique=True ,editable=False)
    username = models.CharField(max_length=40 , null = True , blank = True)
    unique_key = models.UUIDField(default = uuid4 , unique=True)
    points = models.IntegerField(default=0)
    profile_pic = models.ImageField(upload_to = 'profile_pics')
    USERNAME_FIELD = 'email'
    objects = ProfileManager()
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    def __str__(self) : 
        return self.email