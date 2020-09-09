import datetime
import pytz
from typing import List, Tuple, Optional

from benchmark import BenchmarkResult


def from_results(results, urls=None, precision_format="{:.5f}"):
    # type: (List[Tuple[str, dict]], list, str) -> List[dict]
    if not urls:
        urls = [None] * len(results)

    charts = []

    for i, ((title, json_results), url) in enumerate(zip(results, urls)):
        chart = Chart(title, url=url, precision_format=precision_format)

        for lib_name, benchmark_result in json_results.items():
            chart.add_lib_result(lib_name, benchmark_result)

        charts.append({k: v for k, v in chart.__dict__.items() if not k.startswith('_')})

    return charts


class Chart:
    def __init__(self, title="", timestamp=None, url=None, precision_format="{:.5f}"):
        # type: (str, datetime, Optional[datetime.datetime], str) -> None
        if timestamp is None:
            timestamp = datetime.datetime.now(pytz.utc)
        if url is not None:
            self.url = url

        self.title = title
        self.timestamp_s = int((timestamp - datetime.datetime(1970, 1, 1, tzinfo=pytz.utc)).total_seconds())
        self.data = [
            ["test"],
            ["serialize"],
            ["deserialize"]
        ]
        self._precision_format = precision_format

    def add_lib_result(self, name, result):
        # type: (str, BenchmarkResult) -> None
        self.data[0].append(name)
        self.data[1].append(self._precision_format.format(result.serialize))
        self.data[2].append(self._precision_format.format(result.deserialize))
