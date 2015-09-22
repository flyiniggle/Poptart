from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.overview, name="overview"),
    url(r'^(?P<acct_id>[0-9]+)/$', views.account_details, name="account_details")
]