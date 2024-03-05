from django.shortcuts import get_object_or_404, render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Test, File, Client
from .serializers import TestSerializer, ClientSerializer
from django.http import JsonResponse
from django.views.generic import View


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


class FileUploadView(View):
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
        return Response({
            "client_name": client_name,
            "api_list": api_list
        })
