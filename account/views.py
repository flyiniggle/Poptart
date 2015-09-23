from django.views.generic import View
from django.http import HttpResponse
from django.core.exceptions import ValidationError

from poptart.lib.serializers import JSONSerializer
from account.models import Account
from account.models import Holding


class AccountOverview(View):
    def get(self, request):
        return HttpResponse(JSONSerializer().serialize(Account.objects.all()), status="200 OK", content_type="application/json")

    def post(self, request):
        if 'newAccount' in request.post:
            n = request.post
            account = Account(name=n.name, description=n.description)
            try:
                account.full_clean()
                account.save()
                return HttpResponse(JSONSerializer().serialize(account), status="201 Created", content_type="application/json")
            except ValidationError as e:
                return HttpResponse(e, status="409 Conflict", content_type="application/json")


class AccountDetail(View):
    def get(self, request, **kwargs):
        return HttpResponse(JSONSerializer().serialize(Holding.objects.filter(account=kwargs.get('acct_id'))))

    def post(self, request):
        n = request.post
        h = Holding.objects.filter(account=n.account).filter(security=n.security)
        if h:
            h.quantity = n.quantity
            h.expected_quantity = n.expected_quantity
            h.save()
        else:
            holding = Holding(account=n.account, security=n.security, quantity=n.quantity, expected_quantity=n.expected_quantity)
            try:
                holding.full_clean()
                holding.save()
                return HttpResponse(JSONSerializer().serialize(holding), status="201 Created", content_type="application/json")
            except ValidationError as e:
                return HttpResponse(e, status="409 Conflict", content_type="application/json")