from rest_framework import serializers
from .models import Complaint
from rest_framework.fields import CurrentUserDefault


__all__ = [
    "ComplaintSerializer",
]


class ComplaintSerializer(serializers.ModelSerializer):
    """Serializer for the Company model"""

    # author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Complaint
        exclude = ['author',]
