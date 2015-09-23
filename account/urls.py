from django.conf.urls import url

from . import views

from account.views import AccountOverview, AccountDetail

urlpatterns = [
    url(r'^$', AccountOverview.as_view(), name="overview"),
    url(r'^(?P<acct_id>[0-9]+)/$', AccountDetail.as_view(), name="account_details")
]