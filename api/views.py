from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room


# Create your views here.
class RoomView(generics.ListAPIView):
  queryset = Room.objects.all()
  serializer_class = RoomSerializer
  
class CreateRoomView(APIView):
  serializer_class = CreateRoomSerializer
  def post(self, request):
    if request.method == 'POST':
      if not self.request.session.exists(self.request.session.session_key):
        self.request.session.create()
        
      serializer = self.serializer_class(data=request.data)
      if serializer.is_valid():
        guest_pause = serializer.data.get('guest_pause')
        votes_skip = serializer.data.get('votes_skip')
        host = self.request.session.session_key
        query_set = Room.objects.filter(host = host)
        if query_set.exists():
          room = query_set[0]
          room.guest_pause = guest_pause
          room.votes_skip = votes_skip
          room.save(update_fields=['guest_pause', 'votes_skip'])
        else:
          room = Room(host = host, guest_pause = guest_pause, votes_skip = votes_skip)
          room.save()
        return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)  
      return Response(RoomSerializer.errors, status=status.HTTP_400_BAD_REQUEST)