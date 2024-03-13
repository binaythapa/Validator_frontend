from django.urls import re_path

from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# from .views import MyTokenObtainPairView, MyTokenObtainPairSerializer

urlpatterns = [
    re_path('signups', views.signup),
    re_path('login', views.login),
    re_path('test_token', views.test_token),
    re_path('/token/', TokenObtainPairView.as_view(),
            name='token_obtain_pair'),
    re_path('/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
