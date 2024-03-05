from django.shortcuts import get_object_or_404,render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Test,File
from .serializers import TestSerializer
from django.http import JsonResponse
from django.views.generic import View



# def index(request):
#     return render(request, 'index.html')
def index(request):
    return JsonResponse({"key":"value"})


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
            title = request.POST.get('title', '')  # Extracting title from POST data
            file_instance = File(title=title, file=uploaded_file)
            file_instance.save()
            return JsonResponse({'message': 'File uploaded successfully', 'file_title': title})
        else:
            return JsonResponse({'error': 'No file found'}, status=400)