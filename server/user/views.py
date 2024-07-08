from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import mixins, viewsets, status

from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import *
# Create your views here.
__all__=['UserViewSet', "RegisterView"]

# Create your views here.
class UserViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset= User.objects.all()
    serializer_class = UserSerializer



class RegisterView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterUserSerializer