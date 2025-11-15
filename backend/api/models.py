from django.db import models

class Users(models.Model):
    username = models.CharField(max_length=150, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
    
# Cards

class Collection(models.Model):
    user = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name='collections'
    )
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    is_public = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} (by {self.user})"


class Card(models.Model):
    collection = models.ForeignKey(
        Collection,
        on_delete=models.CASCADE,
        related_name='cards'
    )
    question = models.TextField()
    answer = models.TextField()

    hint = models.TextField(blank=True)
    example = models.TextField(blank=True)

    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"Card {self.id} in {self.collection.title}"


