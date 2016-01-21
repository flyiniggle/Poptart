from django.conf.urls import url

from . import views

from account.views import AccountOverview, AccountSummary, AccountDetail

urlpatterns = [
    url(r'^$', AccountOverview.as_view(), name="overview"),
    url(r'^summary', AccountSummary.as_view(), name="summary"),
    url(r'^(?P<acct_id>[0-9]+)/$', AccountDetail.as_view(), name="account_details")
]