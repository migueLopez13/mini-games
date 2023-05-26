from rest_framework.response import Response
from rest_framework.decorators import api_view
from apps.proverb_game.models import Proverb
from apps.proverb_game.api.serializers import ProverbSerializer
import random

@api_view(['GET'])
def proverb_api_view(request):

        proverbs = Proverb.objects.all()
        proverb = random.choice(proverbs)
        proverb_serializer = ProverbSerializer(proverbs)
        return Response(proverb_serializer.data)
