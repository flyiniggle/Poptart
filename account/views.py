import simplejson as json
from random import randrange
import ast

from django.views.generic import View
from django.http import HttpResponse
from django.core.exceptions import ValidationError
from django.utils import timezone

from poptart.lib.serializers import ExtJsonSerializer, ExtPythonSerializer
from poptart.lib.encoders import DateTimeWebAPIEncoder
from account.models import Account
from account.models import Holding
from securitymanager.models import Security


class AccountMonitor(View):
    def get(self, request):
        g = request.GET
        page_size = g.get("page_size")
        current_page = g.get("current_page", 1)
        fields = g.getlist("fields", None)
        order_by = g.getlist("order_by", None)

        accounts = Account.objects.all()
        accounts_count = len(accounts)

        if order_by:
            accounts = accounts.order_by(*order_by)

        if page_size and current_page:
            page_size = int(page_size)
            limit = page_size * int(current_page)
            start_offset = limit - page_size
            accounts = accounts[start_offset:limit]

        if fields:
            json_accounts = ExtPythonSerializer().serialize(accounts, fields=fields)
        else:
            json_accounts = ExtPythonSerializer().serialize(accounts)

        response = {
            'total_accounts': accounts_count,
            'accounts_data': json_accounts
        }

        return HttpResponse(json.dumps(response, cls=DateTimeWebAPIEncoder), status="200 OK", content_type="application/json")

    def post(self, request):
        n = request.POST
        if not n:
            return HttpResponse(ValidationError("No account creation data received."), status=400, content_type="application/json")

        account = Account(name=n.get('accountName'), description=n.get('accountDescription'), inception_date=timezone.now(),
                      total_cash=n.get('startingCash'), expected_cash=n.get('expectedCash'), max_pos_drift=n.get('maxPositionDrift'),
                      max_cash_drift=n.get('maxCashDrift'), max_total_drift=n.get('maxTotalDrift'), solution_name="AssetAlloc",
                      manager=randrange(0, 10), client_1_id=randrange(1, 50), last_update=timezone.now())

        account.full_clean()
        account.save()
        return HttpResponse(json.dumps(ExtPythonSerializer().serialize(Account.objects.get(name=account.name)), cls=DateTimeWebAPIEncoder), status=201, content_type="application/json")


class AccountSummary(View):
    def get(self, request):
        now = timezone.now()
        time_delta = timezone.timedelta(days=7)

        count = len(Account.objects.all())
        active = [account.name for account in Account.objects.filter(last_update__gt=now - time_delta)]
        summary_data = dict(total_count=count, active=active)
        return HttpResponse(json.dumps(summary_data, cls=DateTimeWebAPIEncoder), status="200 OK", content_type="application/json")


class AccountDetail(View):
    def get(self, request, **kwargs):
        acct_id = kwargs.get('acct_id')
        account = Account.objects.filter(pk=acct_id)
        JSONAccount = ExtJsonSerializer().serialize(account)

        return HttpResponse(JSONAccount, status="200 OK", content_type="application/json")

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
                return HttpResponse(ExtJsonSerializer().serialize(holding), status="201 Created", content_type="application/json")
            except ValidationError as e:
                return HttpResponse(e, status="409 Conflict", content_type="application/json")


class AccountHoldings(View):
    def get(self, request, **kwargs):
        acct_id = kwargs.get('acct_id')
        g = request.GET
        fields = g.getlist("fields", None)
        account = Account.objects.get(pk=acct_id)
        if fields:
            JSONHoldings = ExtJsonSerializer().serialize(account.holdings, fields=fields)
        else:
            JSONHoldings = ExtJsonSerializer().serialize(account.holdings)
        return HttpResponse(JSONHoldings, status=200, content_type="application/json")


class DemoData(View):
    def get(self, request):
        securities = Security.objects.all()
        account_types = ["savings", 'retirement', 'growth', 'account', 'basic']
        sponsors = ['MRG', 'MRL', 'UBS', 'XFI', 'WCV', 'SMB']
        solutions = ["AssetAlloc", "E1", "E2", "EquityIndex", "FI", "FIDynamic", "FixedIncome", "PRDT-Product2", "Strategy1", "Strategy2", "Strategy3", "Strategy4", "Strategy5", "Strategy6", "Strategy7", "Strategy8", "Strategy9", "Strategy10"]
        for i in range(0, 100):
            sponsor = sponsors[randrange(0, len(sponsors) - 1)]
            account_type = account_types[randrange(0, len(account_types) -1)]
            name = "{0}{1}{2}".format(sponsor, account_type, i)
            cash = randrange(0, 100000000)
            expected_cash = randrange(0, 10000000)
            client = randrange(1, 50)
            description = "{0} for client {1}".format(account_type, client)
            max_pos_drift = randrange(0, 100000)
            max_cash_drift = randrange(0, 100000)
            max_total_drift = randrange(0, 200000)
            manager = randrange(0, 10)
            solution = solutions[randrange(0, len(solutions) - 1)]
            account = Account(name=name, description=description, inception_date=timezone.now(), total_cash=cash,
                              expected_cash=expected_cash, max_pos_drift=max_pos_drift, max_cash_drift=max_cash_drift,
                              max_total_drift=max_total_drift, client_1_id=client, manager=manager, solution_name=solution)
            account.save()
            number_of_holdings = randrange(0, 15)
            for j in range(0, number_of_holdings):
                sec = securities[randrange(1, (len(securities) - 1))]
                quan = randrange(1, 5000)
                exquan = randrange(1, 5000)
                exval = randrange(1, 1000000)
                holding = Holding(account=account, security=sec,
                                  quantity=quan, expected_quantity=exquan, expected_value=exval)
                holding.save()

        return HttpResponse("done", status="200 OK", content_type="text/html")
