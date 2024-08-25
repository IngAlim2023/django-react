from django.db import models

# Create your models here.
class TipoDocumento(models.Model):
    tipo_documento = models.CharField('Tipo de documento', max_length=30)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    class Meta:
        verbose_name = 'Tipo de documento'
        verbose_name_plural = 'Tipos de documentos'
    
    def __str__(self):
        return f'{self.tipo_documento}'

# Create your models here.
class Cliente(models.Model):

    nombre = models.CharField(verbose_name='Nombre', max_length = 20)
    Apellido = models.CharField(verbose_name='Apellido', max_length = 20)
    email = models.EmailField(verbose_name='Correo Electrónico', unique=True)
    tipo_id = models.ForeignKey(TipoDocumento, on_delete=models.DO_NOTHING, null=True)
    identification = models.CharField(verbose_name='Número de Identificación', max_length = 20)
    address = models.CharField(verbose_name= 'Dirección', max_length=255)
    phone = models.CharField(verbose_name= 'Telefono', max_length=255)
    birthday = models.DateField(verbose_name= 'Fecha de Nacimiento', null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
    
    def __str__(self):
        return f'{self.nombre}'