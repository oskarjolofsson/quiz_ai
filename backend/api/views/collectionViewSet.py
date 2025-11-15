from rest_framework import viewsets
from rest_framework.response import Response
from api.services.tables.collection import CollectionService
from api.services.serializers.collection_serializer import CollectionSerializer

class CollectionViewSet(viewsets.ViewSet):

    # GET /collections/?user_id=123
    def list(self, request):
        user_id = request.query_params.get("user_id")
        collections = CollectionService().list_by_userid(user_id)
        serializer = CollectionSerializer(collections, many=True)
        return Response(serializer.data)

    # POST /collections/
    def create(self, request):
        serializer = CollectionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        collection = CollectionService().create(**serializer.validated_data)
        return Response(CollectionSerializer(collection).data, status=201)
