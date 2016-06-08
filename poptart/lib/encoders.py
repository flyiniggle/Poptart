from datetime import datetime
import simplejson


class DateTimeWebAPIEncoder(simplejson.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.strftime('%d/%m/%Y %H:%M')
        return simplejson.JSONEncoder.default(self, obj)
