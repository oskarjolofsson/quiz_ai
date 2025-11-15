from typing import List
from api.models import Collection


class CollectionSerializer:
    """Serializer for Collection model."""
    
    @staticmethod
    def serialize_collection(collection: Collection) -> dict:
        """Serialize a single collection to dictionary."""
        return {
            "id": collection.id,
            "user_id": collection.user.id,
            "title": collection.title,
            "description": collection.description,
            "is_public": collection.is_public,
        }
    
    @staticmethod
    def serialize_collections(collections: List[Collection]) -> List[dict]:
        """Serialize multiple collections to list of dictionaries."""
        return [CollectionSerializer.serialize_collection(col) for col in collections]
