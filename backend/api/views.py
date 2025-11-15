from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from api.serializers.collection_serializer import CollectionSerializer
from api.serializers.card_serializer import CardSerializer
from api.serializers.user_serializer import UserSerializer

# Create your views here.

@api_view(['GET'])
def hello(request):
    return Response({"message": "Hello, world!"})

# Users
class UserListView(APIView):
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.user_serializer = UserSerializer()
    
    def get(self, request):
        
        # Execute service
        data = self.user_serializer.list_all()
        return Response(data)

    def post(self, request):
        # Get data from request
        email = request.data["email"]
        name = request.data["name"]
        username = request.data["username"]
        
        # Execute service
        user = self.user_service.create(username=username, name=name, email=email)
        return Response({"id": user.id})
    
    
class CollectionListView(APIView):
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.collection_service = CollectionService()
    
    def get(self, request):
        # Return all collections that belong to the user_id in request.user.id
        user_id = request.data.get("user_id")
        collections = self.collection_service.get_all_serialized_by_user(user_id)
        return Response({
            "collections": collections,
            "count": len(collections),
            "message": "List of collections",
            })
    
    def post(self, request):
        user_id = request.data.get("user_id")
        title = request.data.get("title")
        description = request.data.get("description", "")
        is_public = request.data.get("is_public", False)
        
        collection = self.collection_service.create(user_id=user_id, title=title, description=description, is_public=is_public)
        return Response({"id": collection.id, "message": "Create a new collection"})    

class CardListView(APIView):
    
    def get(self, request):
        return Response({"message": "List of cards"})
    
    def post(self, request):
        return Response({"message": "Create a new card"})