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

    