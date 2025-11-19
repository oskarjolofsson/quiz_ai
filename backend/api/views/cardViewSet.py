from rest_framework import viewsets
from rest_framework.response import Response
from api.services.tables.cards import CardService
from api.services.serializers.card_serializer import CardSerializer, CardBulkCreateSerializer

class CardViewSet(viewsets.ViewSet):

    # GET /cards/?collection_id=55
    def list(self, request):
        collection_id = request.query_params.get("collection_id")
        cards = CardService().list_by_collection(collection_id)
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)

    # GET /cards/123/
    def retrieve(self, request, pk=None):
        card = CardService().get(pk)
        serializer = CardSerializer(card)
        return Response(serializer.data)

    # POST /cards/
    def create(self, request):    
        serializer = CardBulkCreateSerializer(data=request.data)
        if not serializer.is_valid():
            print("VALIDATION ERROR:", serializer.errors)
            return Response(serializer.errors, status=400)

        serializer.is_valid(raise_exception=True)
        cards_data = serializer.validated_data["cards"]
        created_cards = CardService().create_bulk(cards_data)

        return Response(
            CardSerializer(created_cards, many=True).data,
            status=201
        )
