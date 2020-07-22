from django.db import models

class Field(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=30)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Form(models.Model):
    name = models.CharField(max_length=100)
    fields = models.ManyToManyField(Field)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name