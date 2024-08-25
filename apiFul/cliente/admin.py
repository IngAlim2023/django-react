from django.contrib import admin
from cliente.models import TipoDocumento, Cliente
# Register your models here.

class AdminTipoDocumento(admin.ModelAdmin):
    pass
class AdminCliente(admin.ModelAdmin):
    pass


admin.site.register(TipoDocumento, AdminTipoDocumento)
admin.site.register(Cliente, AdminCliente)