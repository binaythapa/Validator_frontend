from django.shortcuts import get_object_or_404, render
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Test, File, Client
from .serializers import TestSerializer, ClientSerializer, FormInfoSerializer, QueryInfoSerializer, FileUploadSerializer
from django.http import JsonResponse
from django.views.generic import View
from .models import Forminfo, Queryinfo, UploadedFile

from django.db import transaction
from django.core.exceptions import ValidationError
from django.core.files.uploadedfile import InMemoryUploadedFile


# def index(request):
#     return render(request, 'index.html')
def index(request):
    return JsonResponse({"key": "value"})


class TestListCreateAPIView(generics.ListCreateAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer


class TestRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, pk=self.kwargs.get('pk'))
        return obj


class FileUploadView(APIView):
    def get(self, request):
        # Retrieve all files from the database
        files = File.objects.all()

        # Create a dictionary to hold file titles and their corresponding paths
        file_info = {}
        for file in files:
            file_info[file.title] = file.file.url

        # Return the dictionary of file titles and paths in the response
        return JsonResponse({'files': file_info})

    def post(self, request):
        if 'file' in request.FILES:
            uploaded_file = request.FILES['file']
            # Extracting title from POST data
            title = request.POST.get('title', '')
            file_instance = File(title=title, file=uploaded_file)
            file_instance.save()
            return JsonResponse({'message': 'File uploaded successfully', 'file_title': title})
        else:
            return JsonResponse({'error': 'No file found'}, status=400)


class FileUploadAPI(generics.ListCreateAPIView):
    queryset = UploadedFile.objects.all()
    serializer_class = FileUploadSerializer

    def get_queryset(self):
        client_name = self.request.query_params.get('client_name', None)
        if client_name:
            return UploadedFile.objects.filter(client_name=client_name)
        # else:
        #     return UploadedFile.objects.all()
        return super().get_queryset()

    def post(self, request, *args, **kwargs):
        try:
            with transaction.atomic():
                fileReceivedArr = request.data
                print(fileReceivedArr)
                result = []

                for i in range(len(fileReceivedArr) // 4):
                    file_list = fileReceivedArr.get(f'{i}[file]', [])
                    result.append({
                        'client_name': fileReceivedArr[f'{i}[client_name]'],
                        'client_alias': fileReceivedArr[f'{i}[client_alias]'],
                        'title': fileReceivedArr[f'{i}[title]'],
                        'file': file_list
                    })

                print(result)

                for formOb in result:
                    file_serializer = FileUploadSerializer(data=formOb)
                    if file_serializer.is_valid():
                        file_serializer.save()
                    else:
                        raise ValidationError(file_serializer.errors)

                # for key in fileReceivedArr:
                # this key has all covered no need to destructure {client_name:"",client_alias:"",file:"",title:""}
                # file_data = fileReceivedArr[key]
                # print(file_data, key)
                # # Extracting individual fields
                # # client_name = if 'client_name'
                # client_alias = file_data.get(f"{key}", "")
                # title = file_data.get(f"{key}", "")
                # file_obj = file_data.get(f"{key}")

                # print("the data are", client_name,
                #       client_alias, title, file_obj)

                # # check if 'file' is an InMemoryUploadedFile Instance
                # if isinstance(file_obj, InMemoryUploadedFile):
                #     # now feed this into serializer
                #     file_serializer = FileUploadSerializer(data={
                #         'client_name': client_name,
                #         'client_alias': client_alias,
                #         'title': title,
                #         'file': file_obj
                #     })

                #     if file_serializer.is_valid():
                #         file_serializer.save()
                #     else:
                #         raise ValidationError(file_serializer.errors)
                # else:
                #     raise ValidationError({'error': 'Invalid file format'})

                # file_serializer = FileUploadSerializer(data=fileObj)
                # if file_serializer.is_valid():
                #     file_serializer.save()
                #     # return Response({'message': 'Top response ,Successfully Saved all Data'})
                # else:
                #     # Raise Error
                #     raise ValidationError(file_serializer.errors)

        except ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'message': 'Successfully Saved all Data'})

        # except:
        #   print('An exception occurred')
        # serializer = FileUploadSerializer(data=request.data)
        # print(request.data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ClientView(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ClientAPIView(APIView):
    def get(self, request, *args, **kwargs):
        # Fetch all clients from the database
        clients = Client.objects.all()
        # http://127.0.0.1:8000/api/client/?name=OBS%20Observality
        name_param = request.query_params.get('name', None)
        print("The user parameter is", name_param)

        # Perform the filtering based on the 'name' parameter
        if name_param:
            clients = Client.objects.filter(client_name=name_param)
        else:
            clients = Client.objects.all()

        # Transform data into the desired structure
        api_list = {}
        for client in clients:
            client_name = client.client_name
            file_name = client.client_file_name
            header_name = client.header_name
            modified_name = client.modified_name
            is_primary_key = client.is_primary_key

            # Check if 'file_name' is not in the 'api_list'
            if file_name not in api_list:
                api_list[file_name] = []

            # Add data to the sub-dictionary
            api_list[file_name].append({
                "header_name": header_name,
                "modified_name": modified_name,
                "is_primary_key": is_primary_key
            })

        # Return the transformed data as a response
        if name_param:
            return Response({
                "client_name": client_name,
                "api_list": api_list
            })
        else:
            return Response({
                "client_name": "All",
                "api_list": api_list
            })


# USED multiple model to save data from single API
class FormAPIView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data

        client_name = data.get("client_name", "")
        client_name_alias = data.get("client_name_alias", "")
        query_info = data.get("query", "")

        # Extract data for the first Model
        formInfo_data = data.get('api_list', {})
        print("the form data is", formInfo_data)

        try:
            with transaction.atomic():
                for key in formInfo_data:  # pepco or pound_land
                    for obj in formInfo_data[key]:
                        # Extract first data
                        form_data = {
                            "client_name": client_name,
                            "client_name_alias": client_name_alias,
                            "client_file_name": key,
                            "datatype": obj["datatype"],
                            "header_name": obj["modified_name"] if obj["modified_name"] != "" else obj["header_name"],
                            "is_primary_key": obj["is_primary_key"],
                        }
                        form_serializer = FormInfoSerializer(data=form_data)
                        if form_serializer.is_valid():
                            form_serializer.save()
                        else:
                            # Raise an exception to trigger a rollback
                            raise ValidationError(form_serializer.errors)

                # Extract second data
                query_info_data = {
                    "client_name": client_name,
                    "client_name_alias": client_name_alias,
                    "query": query_info
                }

                query_serializer = QueryInfoSerializer(data=query_info_data)
                if query_serializer.is_valid():
                    query_serializer.save()
                else:
                    # Raise an exception to trigger a rollback
                    raise ValidationError(query_serializer.errors)

        except ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'message': 'Successfully Processed Data'})

    def get(self, request, *args, **kwargs):
        formInfo_instance = Forminfo.objects.all()
        queryInfo_instance = Queryinfo.objects.all()

        # to convert dbsqlite data to json (serialize)
        formInfo_serializer = FormInfoSerializer(
            formInfo_instance, many=True)
        queryInfo_serializer = QueryInfoSerializer(
            queryInfo_instance, many=True)

        # send data
        return Response({
            "formInfo": formInfo_serializer.data,
            "queryInfo": queryInfo_serializer.data
        })
