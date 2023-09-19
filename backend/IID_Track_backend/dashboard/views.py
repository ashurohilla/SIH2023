from django.shortcuts import render
from rest_framework.response import Response

from .serializer import PrescriptionSerializer, MedicineSerializer
from .models import Prescription, Medicine

from rest_framework import viewsets, status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404



class Prescriptioncreateview(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
    
class Medicineviewset(viewsets.ModelViewSet):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer

# Create your views here.


# class getprescription(APIView):
#     # permission_classes =[IsOrganizationPermission]
#     def get(self ,request , id , formate =None):
#         queryset = Prescription.objects.filter(patient = id )
        
#         serializer = PrescriptionSerializer(queryset, many = True)
#         return Response(serializer.data)
    
class getprescription(APIView):
    def get(self, request, id, format=None):
        # Retrieve the prescription object or return a 404 response if not found
        prescription = get_object_or_404(Prescription, patient=id)

        # Get the list of medicine IDs associated with the prescription
        medicine_ids = prescription.medicines.values_list('id', flat=True)

        # Retrieve the medicine names based on the IDs
        medicine_names = Medicine.objects.filter(id__in=medicine_ids).values_list('name', flat=True)

        # Serialize the prescription data
        serializer = PrescriptionSerializer(prescription)

        # Create a response with prescription details and medicine names
        response_data = {
            'prescription_details': serializer.data,
            'medicine_names': list(medicine_names),
        }

        return Response(response_data)
    
