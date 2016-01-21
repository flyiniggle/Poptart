from django.conf.urls import url

from . import views
from securitymanager import views as securitymanagerviews

urlpatterns = [
    url(r'^$', securitymanagerviews.securities, name="securities"),
    url(r'^summary', securitymanagerviews.summary, name="summary"),
    url(r'^(?P<ticker>[a-zA-Z]+)/$', securitymanagerviews.security, name="security"),
    url(r'^asset_classes$', views.asset_classes, name="asset_classes"),
    url(r'^asset_class/(?P<ac_id>[0-9]+)/$', views.asset_class, name="asset_class")
]