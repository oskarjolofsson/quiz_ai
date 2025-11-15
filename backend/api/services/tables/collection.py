from typing import Optional
from api.models import Collection
from .base_table_service import BaseService


class CollectionService(BaseService[Collection]):
    """Service for managing Collection records."""
    
    def create(self, user, title: str, description: str = "", is_public: bool = False) -> Collection:
        """Create a new collection."""
        collection = Collection(
            user=user,
            title=title,
            description=description,
            is_public=is_public
        )
        self._save_record(collection)
        return collection
    
    def get_by_id(self, collection_id: int) -> Optional[Collection]:
        """Retrieve a collection by ID."""
        try:
            return Collection.objects.get(id=collection_id)
        except Collection.DoesNotExist:
            return None
    
    def update(self, collection: Collection, **kwargs) -> Collection:
        """Update an existing collection."""
        self._set_attributes(collection, **kwargs)
        self._save_record(collection)
        return collection
