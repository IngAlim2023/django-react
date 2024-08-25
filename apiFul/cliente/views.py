from  rest_framework import viewsets
from .serializers import TiDoSerializer, ClienteSerializer
from .models import TipoDocumento, Cliente

# Create your views here.
class TipoDocView(viewsets.ModelViewSet):
    serializer_class = TiDoSerializer
    queryset = TipoDocumento.objects.all()

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()
