from rest_framework import serializers
from .models import Complaint, Comment
from rest_framework.fields import CurrentUserDefault
from drf_extra_fields.geo_fields import PointField


__all__ = [
    "ComplaintSerializer",
    "CommentSerializer"
]


class ComplaintSerializer(serializers.ModelSerializer):

    # author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    comment_count = serializers.SerializerMethodField()
    picture_url = serializers.SerializerMethodField()
    location = PointField(required=False)
    class Meta:
        model = Complaint
        exclude = ['author',]

    def get_comment_count(self, obj) -> int:
        return obj.comment_set.all().count()
    
    def get_picture_url(self,obj) -> str:
        return obj.custom_file_url
    



class CommentSerializer(serializers.ModelSerializer):

    # author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Comment
        exclude = ['author','complaint']


    def create(self, validated_data):
        validated_data['complaint_id'] = self.context.get("complaint_pk")
        return super().create(validated_data)