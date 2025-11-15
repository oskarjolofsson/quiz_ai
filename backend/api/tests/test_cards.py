import pytest
from rest_framework.test import APIClient
from api.models import Users, Collection, Card

client = APIClient()


@pytest.mark.django_db
def test_get_cards_by_collection():
    user = Users.objects.create(username="u", name="U", email="u@test.com")
    collection = Collection.objects.create(user=user, title="Col1", description="")

    Card.objects.create(collection=collection, question="Q1", answer="A1")
    Card.objects.create(collection=collection, question="Q2", answer="A2")

    response = client.get(f"/api/cards/?collection_id={collection.id}")

    assert response.status_code == 200
    assert len(response.data) == 2


@pytest.mark.django_db
def test_create_card():
    user = Users.objects.create(username="u", name="U", email="u@test.com")
    collection = Collection.objects.create(user=user, title="C", description="")

    payload = {
        "collection": collection.id,
        "question": "What?",
        "answer": "This.",
        "hint": "",
        "example": "",
        "order": 0
    }

    response = client.post("/api/cards/", payload, format="json")

    assert response.status_code == 201
    assert response.data["question"] == "What?"
    assert Card.objects.count() == 1


@pytest.mark.django_db
def test_get_single_card():
    user = Users.objects.create(username="u", name="U", email="u@test.com")
    collection = Collection.objects.create(user=user, title="C", description="")
    card = Card.objects.create(collection=collection, question="Q1", answer="A1")

    response = client.get(f"/api/cards/{card.id}/")

    assert response.status_code == 200
    assert response.data["id"] == card.id
    assert response.data["question"] == "Q1"

