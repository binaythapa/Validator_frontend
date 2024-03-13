from django.urls import path
from api.views import *
from django.urls import path, include
from . import views
from .views import index


urlpatterns = [
    path('/tests/', TestListCreateAPIView.as_view(), name='test-list-create'),
    path('/tests/<int:pk>/', TestRetrieveUpdateDestroyAPIView.as_view(),
         name='test-detail'),
    # path('/file_upload/', FileUploadView.as_view(), name='file_upload'),
    path('/file_upload/', FileUploadAPI.as_view(), name="fileView"),
    path('/index/', index, name="index"),
    # not used as all 
    path('/client/post/', ClientView.as_view(), name='clientView'),
    path('/client/', ClientAPIView.as_view(), name='clientAPI'),
    path('/form/', FormAPIView.as_view(), name='form'),


]
