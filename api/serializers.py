from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = ('id', 'code', 'host', 'guest_pause', 'votes_skip', 'created_at')