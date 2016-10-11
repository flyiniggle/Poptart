python manage.py dumpdata --output 'C:/dev/web/poptartnode/account/fixtures/demodatadump.json' --natural-primary --exclude=auth --exclude=contenttypes --exclude=sessions

python manage.py dumpdata securitymanager --output 'C:/dev/web/poptartnode/securitymanager/fixtures/demodatadump.json' --natural-primary --exclude=auth --exclude=contenttypes --exclude=sessions
