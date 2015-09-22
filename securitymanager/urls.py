from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.securities, name="securities"),
    url(r'^(?P<ticker>[a-zA-Z]+)/$', views.security, name="security")
]