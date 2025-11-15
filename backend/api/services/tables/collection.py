from api.models import Collection

class CollectionService:
    def get(self, collection_id):
        return Collection.objects.get(id=collection_id)

    def list_by_userid(self, user_id):
        return Collection.objects.filter(user_id=user_id)

    def create(self, **validated_data):
        collection = Collection.objects.create(**validated_data)
        collection.save()
        
        return collection