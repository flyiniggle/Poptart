from django.core.serializers.json import Serializer as DJ_JSON_Serializer
from django.utils.encoding import force_text


class JSONSerializer(DJ_JSON_Serializer):
    def get_dump_object(self, obj):
        data = self._current
        if not self.use_natural_primary_keys or not hasattr(obj, 'natural_key'):
            data["pk"] = force_text(obj._get_pk_val(), strings_only=True)
        return self._current