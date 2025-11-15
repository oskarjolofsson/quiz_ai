import pytest
from rest_framework.test import APIClient
from api.models import Users

client = APIClient()


@pytest.mark.django_db
def test_get_users():
    # Create dummy users
    Users.objects.create(username="john", name="John Doe", email="john@test.com")
    Users.objects.create(username="jane", name="Jane Doe", email="jane@test.com")

    response = client.get("/api/users/")

    assert response.status_code == 200
    assert len(response.data) == 2


@pytest.mark.django_db
def test_create_user():
    payload = {
        "username": "oskar",
        "name": "Oskar",
        "email": "oskar@example.com"
    }

    response = client.post("/api/users/", payload, format="json")

    assert response.status_code == 201
    assert response.data["username"] == "oskar"
    assert Users.objects.count() == 1

