from .serde_perf import SerdePerf
import orjson


class OrJsonPerf(SerdePerf):
    name = "orjson"
    module = orjson

    def serialize(self, obj: object):
        orjson.dumps(obj)

    def deserialize(self, jsn: str):
        orjson.loads(jsn)
