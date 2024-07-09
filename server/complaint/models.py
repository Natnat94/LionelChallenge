from django.db import models
from django.contrib.auth import get_user_model
from uuid import uuid4
from django.contrib.gis.db import models as geomodels

__all__ = ["Comment", "Complaint"]


def user_directory_path(instance, filename):
    return f"uploaded_file_{uuid4()}.{filename.split('.')[-1]}"


class Complaint(geomodels.Model):
    created_at = geomodels.DateTimeField(auto_now_add=True)
    last_modified = geomodels.DateTimeField(auto_now=True)
    author = geomodels.ForeignKey(
        get_user_model(), on_delete=models.DO_NOTHING, null=True, blank=True
    )
    description = geomodels.TextField(blank=True, null=True)
    priority = geomodels.CharField(max_length=50, blank=True, null=True)
    address = geomodels.CharField(max_length=150, blank=True, null=True)
    postal_code = geomodels.CharField(max_length=50, blank=True, null=True)
    picture = geomodels.FileField(upload_to=user_directory_path, blank=True, null=True)
    location = geomodels.PointField(null=True, blank=True)

    @property
    def custom_file_url(self):
        if self.picture and hasattr(self.picture, "url"):
            original_url = self.picture.url
            return original_url.replace("172.16.238.10:9000", "localhost:9000")
        return None

    def __str__(self) -> str:
        return f"({self.pk}) - {self.created_at.strftime('%d/%m/%y %H:%M:%S')} - {self.address}, {self.postal_code}"


class Comment(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(
        get_user_model(), on_delete=models.DO_NOTHING, null=True, blank=True
    )
    complaint = models.ForeignKey(Complaint, on_delete=models.CASCADE)
    body = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        return f"({self.pk}) Complaint {self.complaint.pk} - {self.created_at.strftime('%d/%m/%y %H:%M:%S')}"
