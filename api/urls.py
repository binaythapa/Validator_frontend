from django.urls import path
from api.views import *
from django.urls import path, include
from . import views

urlpatterns = [
    path('/tests/', TestListCreateAPIView.as_view(), name='test-list-create'),
    path('/tests/<int:pk>/', TestRetrieveUpdateDestroyAPIView.as_view(), name='test-detail'),
    path('/file_upload/', FileUploadView.as_view(), name='file_upload'),
    
]
