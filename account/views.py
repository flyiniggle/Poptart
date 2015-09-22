from django.http import HttpResponse

from poptart.lib.serializers import JSONSerializer
from account.models import Account
from account.models import Holding


def overview(request):
    return HttpResponse(JSONSerializer().serialize(Account.objects.all()))


def account_details(request, acct_id):
    return HttpResponse(JSONSerializer().serialize(Holding.objects.filter(account=acct_id)))