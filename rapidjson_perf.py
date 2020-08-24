import rapidjson

from serde_perf import SerdePerf


class RapidJsonPerf(SerdePerf):
    name = "rapidjson"
    module = rapidjson

    def serialize(self, obj: object):
        rapidjson.dumps(obj)

    def deserialize(self, jsn: [bytes, str]):
        rapidjson.loads(jsn)