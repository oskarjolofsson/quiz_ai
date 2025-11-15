from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.views import APIView
from api.services.auth.users import UserService

# Create your views here.

@api_view(['GET'])
def hello(request):
    return Response({"message": "Hello, world!"})

# Users
class UserListView(APIView):
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.user_service = UserService()
    
    def get(self, request):
        
        # Execute service
        users = self.user_service.list_all_users()
        data = self.user_service.serialize_users(users)
        return Response(data)

    def post(self, request):
        # Get data from request
        email = request.data["email"]
        name = request.data["name"]
        username = request.data["username"]
        
        # Execute service
        user = self.user_service.create_user(username=username, name=name, email=email)
        return Response({"id": user.id})
    
# Cards