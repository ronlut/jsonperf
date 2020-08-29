import rapidjson
import six

from libraries.serde_perf import SerdePerf


class RapidJsonPerf(SerdePerf):
    name = "rapidjson"
    module = rapidjson

    @property
    def version(self):
        return super(RapidJsonPerf, self).version if six.PY3 else '0.5.1'

    def serialize(self, obj):
        # type: (object) -> None
        rapidjson.dumps(obj)

    def deserialize(self, jsn):
        # type: ([bytes, str]) -> None
        rapidjson.loads(jsn)
