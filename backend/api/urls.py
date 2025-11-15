from api.views import UserListView, hello
from django.urls import path

urlpatterns = [
    path("hello/", hello, name="hello"),
    path("users/", UserListView.as_view(), name="user-list"),
]