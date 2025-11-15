from typing import List
from api.models import Users
from api.services.tables.users import UserService

# Decorator to UserService
class UserSerializer:
    """Serializer for User model."""
    
    def __init__(self):
        self.user_service = UserService()
        
    def list_all(self) -> List[dict]:
        """Retrieve and serialize all users."""
        users = self.user_service.list_all()
        return [self.serialize_user(user) for user in users]
