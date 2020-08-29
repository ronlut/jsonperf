from .serde_perf import SerdePerf
import orjson


class OrJsonPerf(SerdePerf):
    name = "orjson"
    module = orjson

    def serialize(self, obj):
        # type: (object) -> None
        orjson.dumps(obj)

    def deserialize(self, jsn):
        # type: ([bytes, str]) -> None
        orjson.loads(jsn)
