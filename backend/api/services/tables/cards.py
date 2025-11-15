from api.models import Card

class CardService:
    def get(self, card_id):
        return Card.objects.get(id=card_id)

    def list_by_collection(self, collection_id):
        return Card.objects.filter(collection_id=collection_id)

    def create(self, **validated_data):
        return Card.objects.create(**validated_data)

    def update(self, card_id, **validated_data):
        Card.objects.filter(id=card_id).update(**validated_data)
        return self.get(card_id)