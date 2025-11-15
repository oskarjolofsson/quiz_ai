import pytest
from rest_framework.test import APIClient
from api.models import Users, Collection

client = APIClient()


@pytest.mark.django_db
def test_get_collections_by_user():
    user = Users.objects.create(username="test", name="Test User", email="test@test.com")

    Collection.objects.create(user=user, title="First", description="")
    Collection.objects.create(user=user, title="Second", description="")

    response = client.get("/api/collections/?user_id=" + str(user.id))

    assert response.status_code == 200
    assert len(response.data) == 2


@pytest.mark.django_db
def test_create_collection():
    user = Users.objects.create(username="u1", name="U1", email="u1@test.com")

    payload = {
        "user": user.id,
        "title": "My Collection",
        "description": "Test desc",
        "is_public": False
    }

    response = client.post("/api/collections/", payload, format="json")

    assert response.status_code == 201
    assert response.data["title"] == "My Collection"
    assert Collection.objects.count() == 1
