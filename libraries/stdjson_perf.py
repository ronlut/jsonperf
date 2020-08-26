from libraries.serde_perf import SerdePerf
import json


class StdJsonPerf(SerdePerf):
    name = "json"
    module = json

    def serialize(self, obj: object):
        json.dumps(obj)

    def deserialize(self, jsn: str):
        json.loads(jsn)