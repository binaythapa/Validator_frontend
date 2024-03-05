from django.db import models


class Test(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class File(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='excel/', blank=True)

    def __str__(self):
        return self.title


class Client(models.Model):
    client_name = models.CharField(max_length=200)
    client_file_name = models.CharField(max_length=200)
    header_name = models.CharField(max_length=200)
    modified_name = models.CharField(max_length=200, blank=True)
    is_primary_key = models.BooleanField(default=False)

    def __str__(self):
        return self.client_name
