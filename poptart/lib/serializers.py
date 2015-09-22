from django.core.serializers.json import Serializer as DJ_JSON_Serializer


class JSONSerializer(DJ_JSON_Serializer):
    def get_dump_object(self, obj):
        return self._current