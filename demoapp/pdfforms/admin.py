from django.contrib import admin
from demoapp.pdfforms.models import Field, Form

# Register your models here.
admin.site.register(Field)
admin.site.register(Form)