from django.db import models
from user.models import User

# Create your models here.

class Medicine(models.Model):
    # Fields for Medicine Name and Description
    name = models.CharField(max_length=100)
    description = models.TextField()

    # A field for a unique identifier (e.g., a serial number)
    identifier = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name
    
    
class Prescription(models.Model):
    # Fields for prescription details
    patient  = models.ForeignKey(User , on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=100)
    date_prescribed = models.DateField()

    # Define a Many-to-Many relationship with Medicine
    medicines = models.ManyToManyField(Medicine)

    def __str__(self):
        return f"Prescription for {self.patient_name} on {self.date_prescribed}"    
