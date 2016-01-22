import datetime
import json

from django.views.generic import View
from django.http import HttpResponse
from django.core.exceptions import ValidationError
from django.forms.models import model_to_dict

from poptart.lib.serializers import JSONSerializer
from account.models import Account
from account.models import Holding


class AccountMonitor(View):
    def get(self, request):
        accounts = Account.objects.all()
        complete_accounts = []
        for account in accounts:
            complete_account = model_to_dict(account)
            complete_account["total_value"] = account.total_value
            complete_account["total_expected_value"] = account.total_expected_value
        return HttpResponse(JSONSerializer().serialize(accounts), status="200 OK", content_type="application/json")

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


class AccountSummary(View):
    def get(self, request):
        now = datetime.datetime.now()
        time_delta = datetime.timedelta(days=7)

        count = len(Account.objects.all())
        active = [account.name for account in Account.objects.filter(last_update__gt=now - time_delta)]
        summary_data = dict(total_count=count, active=active)
        return HttpResponse(json.dumps(summary_data), status="200 OK", content_type="application/json")


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