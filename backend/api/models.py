from django.db import models

class Users(models.Model):
    username = models.CharField(max_length=150, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username