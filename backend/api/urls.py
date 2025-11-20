from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views.views import hello
from api.views.userViewSet import UserViewSet
from api.views.collectionViewSet import CollectionViewSet
from api.views.cardViewSet import CardViewSet
from api.views.compareView import CompareAnswerView
from api.views.promptView import PromptView

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'collections', CollectionViewSet, basename='collections')
router.register(r'cards', CardViewSet, basename='cards')

urlpatterns = [
    path('', hello, name='hello'),
    path('', include(router.urls)),
    path("compare/", CompareAnswerView.as_view(), name="compare-answer"),
    path("prompt/", PromptView.as_view(), name="prompt"),
]
