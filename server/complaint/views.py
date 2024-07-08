from django.shortcuts import render
from rest_framework import mixins, viewsets, status
from .models import Complaint
from .serializers import *

__all__=['ComplaintViewSet']

# Create your views here.
class ComplaintViewSet(viewsets.ModelViewSet):
    queryset= Complaint.objects.all()
    serializer_class = ComplaintSerializer
