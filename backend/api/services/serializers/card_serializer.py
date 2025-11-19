from rest_framework import serializers
from api.models import Card

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ["id", "collection", "question", "answer", "hint", "example", "order"]

class CardBulkCreateSerializer(serializers.Serializer):
    cards = CardSerializer(many=True)

    def create(self, validated_data):
        cards_data = validated_data["cards"]

        for card_data in cards_data:
            card_data["collection"] = validated_data["collection"]

        return cards_data  # let the service handle DB creation
