from rest_framework import serializers
from .models import Test, Client, Forminfo, Queryinfo, UploadedFile


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['id', 'name', 'address']


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class FormInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Forminfo
        fields = '__all__'


class QueryInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Queryinfo
        fields = '__all__'


class FileUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ['title', 'client_name', 'client_alias', 'file']
