import graphene

import demoapp.pdfforms.schema


class Query(demoapp.pdfforms.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)