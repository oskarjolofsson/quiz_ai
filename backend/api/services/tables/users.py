from api.models import Users

class UserService:
    def get(self, user_id):
        return Users.objects.get(id=user_id)
    
    def create(self, **validated_data):
        return Users.objects.create(**validated_data)
    
    def list_all(self):
        return Users.objects.all()
