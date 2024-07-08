"""Define the API router"""

from django.urls import include, path, re_path

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from complaint.views import *
from user.views import *

__all__ = ["api_urlpatterns"]

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version="v1",
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

schema_view = schema_view.with_ui("redoc", cache_timeout=0)

router = DefaultRouter()
router.register(r"complaints", ComplaintViewSet)
router.register(r"users", UserViewSet)

api_urlpatterns = [
    re_path(r"^$", schema_view, name="schema-swagger-ui"),
    path("", include(router.urls)),

]
