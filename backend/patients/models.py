from django.db import models
from django.contrib.auth.models import User
from numpy import place
# Create your models here.


class Cases(models.Model):
    case=models.CharField(max_length=200)
    def __str__(self):
        return self.case

class PatientAppointement(models.Model):
    # patient=models.Model(User,on_delete=models.CASCADE)
    first_name=models.CharField(max_length=99)
    last_name=models.CharField(max_length=99)
    age=models.IntegerField()
    case=models.ManyToManyField(Cases,on_delete=models.CASCADE)
    otherSymptoms=models.TextField(max_length=500,null=True,blank=True)
    # auto created bcz we need to now how many ppl before the last one --order in views.py--
    date_added=models.DateTimeField(auto_now_add=True)

class Hospitals(models.Model):
    name=models.CharField(max_length=100,null=False,blank=False)
    # set place with current position in views.py
    place=models.CharField(max_length=200)

class Doctors(models.Model):
    first_name=models.CharField(max_length=99)
    last_name=models.CharField(max_length=99)
    age=models.IntegerField()
    years_of_experience=models.IntegerField()
    place=models.CharField(max_length=200)
    
class SecretaryDoctor(models.Model):
    patirnts=models.ManyToManyField(PatientAppointement,on_delete=models.CASCADE)



