from .models import Cliente, TipoDocumento
from rest_framework import serializers

class TiDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoDocumento
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
       model = Cliente
       fields = '__all__' 