import json
import traceback

from django.core.exceptions import ValidationError
from django.http import HttpResponse


class Error(HttpResponse):

    def __init__(self, request, exception=None, status=500, content_type="application/json",):

        exception_response = {
            "summary": "",
            "message": "",
            "stacktrace": "",
            "method": "",
            "path": ""
        }
        try:
            message = ""
            if type(exception) is ValidationError:
                summary = "The following validation error(s) occurred:"
                for validationError in iter(sorted(exception.message_dict.iteritems())):
                    message += "{0}: {1}. ".format(validationError[0], " ".join(validationError[1]))
            else:
                summary = "Something has gone horribly wrong."
                message = exception.message

            exception_response['summary'] = summary
            exception_response['message'] = message
            exception_response['stacktrace'] = traceback.format_exc()
            exception_response['method'] = request.method
            exception_response['path'] = request.path

        except Exception:
            exception_response['summary'] = "Something really went wrong here."
            exception_response['message'] = "I'm so sorry."
            exception_response['stacktrace'] = traceback.format_exc()

        super(Error, self).__init__(json.dumps({"error": exception_response}), status=status, content_type=content_type)


class ErrorMiddleware(object):
    def process_exception(self, request, exception):
        return Error(request, exception=exception)