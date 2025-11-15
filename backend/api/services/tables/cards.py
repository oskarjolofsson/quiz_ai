from typing import Optional, List
from api.models import Card, Collection
from api.serializers import CardSerializer
from .base_table_service import BaseService


class CardService(BaseService[Card]):
    """Service for managing Card records."""
    
    def create(self, collection: Collection, question: str, answer: str, 
               hint: str = "", example: str = "", order: int = 0) -> Card:
        """Create a new card."""
        card = Card(
            collection=collection,
            question=question,
            answer=answer,
            hint=hint,
            example=example,
            order=order
        )
        self._save_record(card)
        return card
    
    def get_by_id(self, card_id: int) -> Optional[Card]:
        """Retrieve a card by ID."""
        try:
            return Card.objects.get(id=card_id)
        except Card.DoesNotExist:
            return None
    
    def update(self, card: Card, **kwargs) -> Card:
        """Update an existing card."""
        self._set_attributes(card, **kwargs)
        self._save_record(card)
        return card
