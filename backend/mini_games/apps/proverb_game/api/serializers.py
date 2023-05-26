from rest_framework import serializers
from apps.proverb_game.models import Proverb

class ProverbSerializer(serializers.ModelSerializer):

    class Meta:
        model = Proverb()
        fields = '__all__'