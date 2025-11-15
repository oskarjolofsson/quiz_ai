from rest_framework import viewsets
from rest_framework.response import Response
from api.services.tables.users import UserService
from api.services.serializers.user_serializer import UserSerializer

class UserViewSet(viewsets.ViewSet):

    def list(self, request):
        # Get all users
        users = UserService().list_all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = UserService().create(**serializer.validated_data)
        return Response(UserSerializer(user).data, status=201)
