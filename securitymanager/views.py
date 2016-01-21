import json

from django.http import HttpResponse

from poptart.lib.serializers import JSONSerializer
from securitymanager.models import Security, AssetClass


def securities(request):
    return HttpResponse(JSONSerializer().serialize(Security.objects.all()))

def summary(request):
    data = {
        "total_count": ""
    }
    data["total_count"] = len(Security.objects.all())
    
    return HttpResponse(json.dumps(data), status="200 OK", content_type="application/json")

def security(request, ticker):
    return HttpResponse(JSONSerializer().serialize(Security.objects.filter(ticker=ticker)))

def asset_classes(request):
    return HttpResponse(JSONSerializer().serialize(AssetClass.objects.all()))


def asset_class(request, ac_id):
    return HttpResponse(JSONSerializer().serialize(AssetClass.objects.filter(id=ac_id)))