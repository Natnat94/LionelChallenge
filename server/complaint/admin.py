from django.contrib import admin
from complaint.models import *

# Register your models here.
@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass