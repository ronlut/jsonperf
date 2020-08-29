import json
import timeit
from typing import List

from libraries.serde_perf import SerdePerf


class BenchmarkResult:
    def __init__(self, serialize, deserialize):
        # type: (float, float) -> None
        self.serialize = serialize
        self.deserialize = deserialize


class Benchmark:
    TIMES = 10000
    REPEAT = 10

    def __init__(self, libraries):
        # type: (List[SerdePerf]) -> None
        self.libraries = libraries

    def run(self, test_json, times=TIMES, repeat=REPEAT):
        # type: (str, int, int) -> dict
        result = {}
        test_object = json.loads(test_json)
        for p in self.libraries:
            total_time_took = min(timeit.repeat(lambda: p.deserialize(test_json), number=times, repeat=repeat))
            deserialize_took_ms = total_time_took / times * 1000

            total_time_took = min(timeit.repeat(lambda: p.serialize(test_object), number=times, repeat=repeat))
            serialize_took_ms = total_time_took / times * 1000

            result[p.name_with_version] = BenchmarkResult(serialize_took_ms, deserialize_took_ms)

        return result
