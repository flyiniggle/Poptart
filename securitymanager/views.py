from django.http import HttpResponse

from poptart.lib.serializers import JSONSerializer
from securitymanager.models import Security, AssetClass


def securities(request):
    return HttpResponse(JSONSerializer().serialize(Security.objects.all()))


def security(request, ticker):
    return HttpResponse(JSONSerializer().serialize(Security.objects.filter(ticker=ticker)))