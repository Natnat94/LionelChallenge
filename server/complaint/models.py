from django.db import models
from django.contrib.auth import get_user_model

__all__ = ["Comment", "Complaint"]

# Create your models here.
class Complaint(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.DO_NOTHING, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    priority = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=150, blank=True, null=True)
    postal_code = models.CharField(max_length=50, blank=True, null=True)



class Comment(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.DO_NOTHING, null=True, blank=True)
    complaint = models.ForeignKey(Complaint, on_delete=models.CASCADE)
    body = models.TextField(blank=True, null=True)

    