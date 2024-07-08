from django.contrib import admin
from user.models import *

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass
