from django.conf.urls import url

from . import views

from account.views import AccountMonitor, AccountSummary, AccountDetail, DemoData

urlpatterns = [
    url(r'^$', AccountMonitor.as_view(), name="monitor"),
    url(r'^summary', AccountSummary.as_view(), name="summary"),
    url(r'^demodata', DemoData.as_view(), name="demo"),
    url(r'^(?P<acct_id>[0-9]+)/$', AccountDetail.as_view(), name="account_details")
]