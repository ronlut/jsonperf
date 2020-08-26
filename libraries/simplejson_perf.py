from typing import Union

import simplejson

from libraries.serde_perf import SerdePerf


class SimpleJsonPerf(SerdePerf):
    name = "simplejson"
    module = simplejson

    def serialize(self, obj: object):
        simplejson.dumps(obj)

    def deserialize(self, jsn: Union[bytes, str]):
        simplejson.loads(jsn)