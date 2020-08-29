from libraries.serde_perf import SerdePerf
import json


class StdJsonPerf(SerdePerf):
    name = "json"
    module = json

    def serialize(self, obj):
        # type: (object) -> None
        json.dumps(obj)

    def deserialize(self, jsn):
        # type: ([bytes, str]) -> None
        json.loads(jsn)