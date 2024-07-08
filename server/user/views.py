from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import mixins, viewsets, status
from .models import User
from .serializers import UserSerializer
# Create your views here.
__all__=['UserViewSet']

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset= User.objects.all()
    serializer_class = UserSerializer

    def get_serializer(self, *args, **kwargs):
        return super().get_serializer(*args, **kwargs)
    
    def get_serializer_class(self):
        if self.action == "create":
            # return CreateUserSerializer
            pass
        return super().get_serializer_class()