from rest_framework import serializers
from api.models import Collection

class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = ["id", "user", "title", "description", "is_public", "created_at"]
