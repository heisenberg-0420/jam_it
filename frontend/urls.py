from django.urls import path
from .views import index

urlpatterns = [
  path('', view=index, name="index"),
  path('join', view=index, name="index"),
  path('create', view=index, name="index")
]
