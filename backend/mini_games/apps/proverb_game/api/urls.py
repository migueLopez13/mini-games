from django.urls import path
from apps.proverb_game.api.api import proverb_api_view

urlpatterns = [
    path('', proverb_api_view, name='proverbs'),
]