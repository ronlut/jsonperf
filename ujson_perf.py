from serde_perf import SerdePerf
import ujson


class UJsonPerf(SerdePerf):
    name = "ujson"
    module = ujson

    def serialize(self, obj: object):
        ujson.dumps(obj)

    def deserialize(self, jsn: str):
        ujson.loads(jsn)
