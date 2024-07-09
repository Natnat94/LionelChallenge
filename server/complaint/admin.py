from django.contrib import admin
from django.contrib.gis import admin as gisAdmin

from complaint.models import *


# Register your models here.
@admin.register(Complaint)
class ComplaintAdmin(gisAdmin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass
