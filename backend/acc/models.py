from django.db import models

class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=30)
    user_mail = models.EmailField(unique=True)
    user_phone = models.CharField(max_length=10)
    password = models.CharField(max_length=128)
    reg_timestamp = models.DateTimeField(auto_now_add=True)
    isAdmin = models.BooleanField(default=False)

