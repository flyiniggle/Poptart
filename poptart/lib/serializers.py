from django.utils.encoding import force_text
from django.core.serializers.base import Serializer as BaseSerializer
from django.core.serializers.python import Serializer as PythonSerializer
from django.core.serializers.json import Serializer as JsonSerializer
from django.utils import six

import cProfile, pstats, StringIO


class ExtBaseSerializer(BaseSerializer):
    def __init__(self):
        super(ExtBaseSerializer, self).__init__()
        self.stream = ""
        self.get_calculated_props = True
        self.selected_fields = None
        self.use_natural_keys = False
        self.use_natural_foreign_keys = False
        self.use_natural_primary_keys = False
        self.options = None
        self.First = True

    def get_dump_object(self, obj):
        data = self._current
        if not self.use_natural_primary_keys or not hasattr(obj, 'natural_key'):
            data["pk"] = force_text(obj._get_pk_val(), strings_only=True)
        return data

    def serialize(self, queryset, **options):
        self.options = options

        self.stream = options.pop('stream', six.StringIO())
        self.get_calculated_props = options.pop('get_calculated_props', True)
        self.selected_fields = options.pop('fields', None)
        self.use_natural_keys = options.pop('use_natural_keys', False)
        self.use_natural_foreign_keys = options.pop('use_natural_foreign_keys', False)
        self.use_natural_primary_keys = options.pop('use_natural_primary_keys', False)

        self.start_serialization()
        self.first = True
        selected_fields = self.selected_fields
        handle_field = self.handle_field
        handle_fk_field = self.handle_fk_field
        handle_m2m_field = self.handle_m2m_field
        handle_prop = self.handle_prop
        #pr = cProfile.Profile()
        #pr.enable()
        if hasattr(queryset, '__iter__'):
            for obj in queryset:
                self.serialize_one(obj, selected_fields, handle_field, handle_fk_field, handle_m2m_field, handle_prop)
        else:
            self.serialize_one(queryset, selected_fields, handle_field, handle_fk_field, handle_m2m_field, handle_prop)
        self.end_serialization()
        #pr.disable()
        #s = StringIO.StringIO()
        #sortby = 'cumulative'
        #ps = pstats.Stats(pr, stream=s).sort_stats(sortby)
        #ps.print_stats()
        #print s.getvalue()
        return self.getvalue()

    def serialize_one(self, obj, selected_fields, handle_field, handle_fk_field, handle_m2m_field, handle_prop):
        self.start_object(obj)
        concrete_model = obj._meta.concrete_model._meta
        props = getattr(obj, 'calculated_props', [])
        for field in concrete_model.local_fields:
            if field.serialize:
                if field.rel is None:
                    if selected_fields is None or field.attname in selected_fields:
                        handle_field(obj, field)
                else:
                    if selected_fields is None or field.attname[:-3] in selected_fields:
                        handle_fk_field(obj, field)
        for field in concrete_model.many_to_many:
            if field.serialize:
                if selected_fields is None or field.attname in selected_fields:
                    handle_m2m_field(obj, field)
        for prop in props:
            if selected_fields is None or prop in selected_fields:
                handle_prop(obj, prop)
        self.end_object(obj)
        if self.first:
            self.first = False

    def handle_prop(self, obj, field):
        self._current[field] = getattr(obj, field)


class ExtPythonSerializer(ExtBaseSerializer, PythonSerializer):
    pass


class ExtJsonSerializer(ExtBaseSerializer, JsonSerializer):
    pass