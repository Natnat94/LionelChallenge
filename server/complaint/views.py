from django.shortcuts import render
from rest_framework import mixins, viewsets, status 
from rest_framework.response import Response
from .models import Complaint, Comment
from .serializers import *

__all__=['ComplaintViewSet', "CommentViewSet"]

# Create your views here.
class ComplaintViewSet(viewsets.ModelViewSet):
    queryset= Complaint.objects.all()
    serializer_class = ComplaintSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset= Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(complaint=self.kwargs['complaint_pk'])

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(context= {"complaint_pk" : self.kwargs['complaint_pk']}, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)