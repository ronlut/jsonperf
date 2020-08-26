from .orjson_perf import OrJsonPerf
from .rapidjson_perf import RapidJsonPerf
from .simplejson_perf import SimpleJsonPerf
from .stdjson_perf import StdJsonPerf
from .ujson_perf import UJsonPerf

__all__ = [OrJsonPerf, UJsonPerf, RapidJsonPerf, StdJsonPerf, SimpleJsonPerf]


def instantiate_libraries():
    return [lib() for lib in __all__]

