from rest_framework import serializers
from .models import Complaint, Comment
from rest_framework.fields import CurrentUserDefault


__all__ = [
    "ComplaintSerializer",
    "CommentSerializer"
]


class ComplaintSerializer(serializers.ModelSerializer):

    # author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    comment_count = serializers.SerializerMethodField()
    class Meta:
        model = Complaint
        exclude = ['author',]

    def get_comment_count(self, obj) -> int:
        return obj.comment_set.all().count()


class CommentSerializer(serializers.ModelSerializer):

    # author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Comment
        exclude = ['author','complaint']


    def create(self, validated_data):
        validated_data['complaint_id'] = self.context.get("complaint_pk")
        return super().create(validated_data)