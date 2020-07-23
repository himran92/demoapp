import graphene

from graphene_django.types import DjangoObjectType

from demoapp.pdfforms.models import Field, Form


class FieldType(DjangoObjectType):
    class Meta:
        model = Field


class FormType(DjangoObjectType):
    class Meta:
        model = Form

    @graphene.resolve_only_args
    def resolve_alpha(self):
        return self.fields.all()


class Query(object):
    all_forms = graphene.List(FormType)

    def resolve_all_forms(self, info, **kwargs):
        return Form.objects.all()