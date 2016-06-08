import json

from django.http import HttpResponse
from django.views.generic import View

from poptart.lib.serializers import ExtJsonSerializer
from securitymanager.models import Security, AssetClass


class Securities(View):
    def get(self, request):
        return HttpResponse(ExtJsonSerializer().serialize(Security.objects.all()), status="200 OK", content_type="application/json")


def summary(request):
    data = dict()
    data["total_count"] = len(Security.objects.all())

    return HttpResponse(json.dumps(data), status="200 OK", content_type="application/json")


def security(request, ticker):
    return HttpResponse(ExtJsonSerializer().serialize(Security.objects.filter(ticker=ticker)))


def asset_classes(request):
    return HttpResponse(ExtJsonSerializer().serialize(AssetClass.objects.all()))


def asset_class(request, ac_id):
    return HttpResponse(ExtJsonSerializer().serialize(AssetClass.objects.filter(id=ac_id)))