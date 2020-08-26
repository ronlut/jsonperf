import json
import timeit
from dataclasses import dataclass
from typing import List

from libraries.serde_perf import SerdePerf


@dataclass
class BenchmarkResult:
    serialize: float
    deserialize: float


class Benchmark:
    TIMES = 10000
    REPEAT = 10

    def __init__(self, libraries: List[SerdePerf]):
        self.libraries = libraries

    def run(self, test_json: str, times: int = TIMES, repeat: int = REPEAT) -> dict:
        result = {}
        test_object = json.loads(test_json)
        for p in self.libraries:
            total_time_took = min(timeit.repeat(lambda: p.deserialize(test_json), number=times, repeat=repeat))
            deserialize_took_ms = total_time_took / times * 1000

            total_time_took = min(timeit.repeat(lambda: p.serialize(test_object), number=times, repeat=repeat))
            serialize_took_ms = total_time_took / times * 1000

            result[p.name_with_version] = BenchmarkResult(serialize_took_ms, deserialize_took_ms)

        return result
