from typing import Optional, List
from api.models import Users
from .base_table_service import BaseService


class UserService(BaseService[Users]):
    """Service for managing User records."""
    
    def create(self, username: str, name: str, email: str) -> Users:
        """Create a new user."""
        user = Users(username=username, name=name, email=email)
        self._save_record(user)
        return user

    def get_by_id(self, user_id: int) -> Optional[Users]:
        """Retrieve a user by ID."""
        try:
            return Users.objects.get(id=user_id)
        except Users.DoesNotExist:
            return None

    def get_by_username(self, username: str) -> Optional[Users]:
        """Retrieve a user by username."""
        try:
            return Users.objects.get(username=username)
        except Users.DoesNotExist:
            return None
    
    def get_by_email(self, email: str) -> Optional[Users]:
        """Retrieve a user by email."""
        try:
            return Users.objects.get(email=email)
        except Users.DoesNotExist:
            return None

    def update(self, user: Users, **kwargs) -> Users:
        """Update an existing user."""
        self._set_attributes(user, **kwargs)
        self._save_record(user)
        return user

    def delete(self, username: str) -> bool:
        """Delete a user by username."""
        user = self.get_by_username(username)
        if user:
            user.delete()
            return True
        return False
    
    def list_all(self) -> List[Users]:
        """Retrieve all users."""
        return list(Users.objects.all())
    
    def serialize_user(self, user: Users) -> dict:
        """Serialize a single user to dictionary."""
        return {
            "id": user.id,
            "username": user.username,
            "name": user.name,
            "email": user.email,
            "date_joined": user.date_joined.isoformat(),
        }
        
    def serialize_users(self, users: List[Users]) -> List[dict]:
        """Serialize multiple users to list of dictionaries."""
        return [self.serialize_user(user) for user in users]
