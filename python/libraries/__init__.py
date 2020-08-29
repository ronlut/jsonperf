import six

from .rapidjson_perf import RapidJsonPerf
from .simplejson_perf import SimpleJsonPerf
from .stdjson_perf import StdJsonPerf
from .ujson_perf import UJsonPerf

if six.PY3:
    from .orjson_perf import OrJsonPerf
    __all__ = [OrJsonPerf, UJsonPerf, RapidJsonPerf, StdJsonPerf, SimpleJsonPerf]
else:
    __all__ = [UJsonPerf, RapidJsonPerf, StdJsonPerf, SimpleJsonPerf]


def instantiate_libraries():
    return [lib() for lib in __all__]

