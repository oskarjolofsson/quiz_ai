from typing import List

from api.services.tables.cards import CardService
from api.models import Card


class CardSerializer:
    """Serializer for Card model."""
    
    def __init__(self):
        self.card_service = CardService()
    
    def get_card_by_collection(self, collection_id: int) -> List[dict]:
        """Get all cards for a specific collection."""
        cards = self.card_service.get_by_collection_id(collection_id)
        return [self.serialize_card(card) for card in cards]
    
    def serialize_card(self, card: Card) -> dict:
        """Serialize a single card to dictionary."""
        return {
            "id": card.id,
            "collection_id": card.collection.id,
            "question": card.question,
            "answer": card.answer,
            "hint": card.hint,
            "example": card.example,
            "order": card.order,
        }
