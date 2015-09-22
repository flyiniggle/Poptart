from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.securities, name="securities"),
    url(r'^(?P<ticker>[a-zA-Z]+)/$', views.security, name="security"),
    url(r'^asset_classes$', views.asset_classes, name="asset_classes"),
    url(r'^asset_class/(?P<ac_id>[0-9]+)/$', views.asset_class, name="asset_class")
]