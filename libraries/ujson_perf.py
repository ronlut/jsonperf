from libraries.serde_perf import SerdePerf
import ujson


class UJsonPerf(SerdePerf):
    name = "ujson"
    module = ujson

    def serialize(self, obj):
        # type: (object) -> None
        ujson.dumps(obj)

    def deserialize(self, jsn):
        # type: ([bytes, str]) -> None
        ujson.loads(jsn)
