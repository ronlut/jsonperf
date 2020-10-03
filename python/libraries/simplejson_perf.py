import simplejson

from libraries.serde_perf import SerdePerf


class SimpleJsonPerf(SerdePerf):
    name = "simplejson"
    module = simplejson

    def serialize(self, obj):
        # type: (object) -> None
        simplejson.dumps(obj)

    def deserialize(self, jsn):
        # type: ([bytes, str]) -> None
        simplejson.loads(jsn)
