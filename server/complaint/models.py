from django.db import models
from django.contrib.auth import get_user_model
from uuid import uuid4

__all__ = ["Comment", "Complaint"]


def user_directory_path(instance, filename):
    return f"uploaded_file_{uuid4()}.{filename.split('.')[-1]}"


# Create your models here.
class Complaint(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.DO_NOTHING, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    priority = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=150, blank=True, null=True)
    postal_code = models.CharField(max_length=50, blank=True, null=True)
    picture = models.FileField(upload_to=user_directory_path, blank=True, null=True)
    location = models.CharField(null=True, blank=True)
    @property
    def custom_file_url(self):
        if self.picture and hasattr(self.picture, 'url'):
            original_url = self.picture.url
            return original_url.replace('172.31.0.3:9000', 'localhost:9000')
        return None


class Comment(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.DO_NOTHING, null=True, blank=True)
    complaint = models.ForeignKey(Complaint, on_delete=models.CASCADE)
    body = models.TextField(blank=True, null=True)
