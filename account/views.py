import datetime
import json
from random import randrange

from django.views.generic import View
from django.http import HttpResponse
from django.core.exceptions import ValidationError

from poptart.lib.serializers import JSONSerializer
from account.models import Account
from account.models import Holding
from securitymanager.models import Security


class AccountMonitor(View):
    def get(self, request):
        accounts = Account.objects.all()
        complete_accounts = []
        for account in accounts:
            complete_accounts.append(buildFullAccount(account))

        return HttpResponse(json.dumps(complete_accounts), status="200 OK", content_type="application/json")

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
        acct_id = kwargs.get('acct_id')
        account = Account.objects.get(pk=acct_id)
        complete_account = buildFullAccount(account)
        holdings = list(Holding.objects.filter(account=acct_id))
        JSONHoldings = JSONSerializer().serialize(holdings)
        details = dict(account=complete_account, holdings=JSONHoldings)
                
        return HttpResponse(json.dumps(details), status="200 OK", content_type="application/json")

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
            account = Account(name=name, description=description, inception_date=datetime.datetime.now(), total_cash=cash,
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

def buildFullAccount(account):
    complete_account = dict()
    complete_account["pk"] = account.pk
    complete_account["name"] = account.name
    complete_account["description"] = account.description
    complete_account["inception_date"] = str(account.inception_date)
    complete_account["total_cash"] = float(account.total_cash)
    complete_account["expected_cash"] = float(account.expected_cash)
    complete_account["max_pos_drift"] = float(account.max_pos_drift)
    complete_account["max_cash_drift"] = float(account.max_cash_drift)
    complete_account["max_total_drift"] = float(account.max_total_drift)
    complete_account["last_update"] = str(account.last_update)
    complete_account["client_1_id"] = account.client_1_id
    complete_account["manager"] = account.manager
    complete_account["solution_name"] = account.solution_name
    complete_account["total_value"] = account.total_value
    complete_account["total_expected_value"] = account.total_expected_value
    complete_account["cash_drift"] = account.cash_drift
    complete_account["holdings_drift"] = account.holdings_drift
    complete_account["total_drift"] = account.total_drift
    
    return complete_account