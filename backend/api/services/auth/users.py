from api.models import Users

class UserService:
    
    @staticmethod
    def create_user(username: str, name: str, email: str) -> Users:
        user = Users(username=username, name=name, email=email)
        user.save()
        return user

    @staticmethod
    def get_user_by_username(username: str) -> Users:
        try:
            return Users.objects.get(username=username)
        except Users.DoesNotExist:
            return None
        
    @staticmethod
    def get_user_by_email(email: str) -> Users:
        try:
            return Users.objects.get(email=email)
        except Users.DoesNotExist:
            return None
        
    @staticmethod
    def get_user_by_id(user_id: int) -> Users:
        try:
            return Users.objects.get(id=user_id)
        except Users.DoesNotExist:
            return None

    @staticmethod
    def delete_user(username: str) -> bool:
        user = UserService.get_user_by_username(username)
        if user:
            user.delete()
            return True
        return False
    
    @staticmethod
    def list_all_users() -> list[Users]:
        return list(Users.objects.all())
    
    def serialize_user(self, user: Users) -> dict:
        return {
            "id": user.id,
            "username": user.username,
            "name": user.name,
            "email": user.email,
            "date_joined": user.date_joined.isoformat(),
        }
        
    def serialize_users(self, users: list[Users]) -> list[dict]:
        return [self.serialize_user(user) for user in users]
    
    