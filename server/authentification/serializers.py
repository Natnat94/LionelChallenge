from rest_framework import serializers
from .models import User

__all__ = [
    'UserSerializer',
]


class UserSerializer(serializers.ModelSerializer):
    """ Serializer for the Company model """

    class Meta:
        model = User
        fields = "__all__"
