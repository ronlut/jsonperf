import json
import six

if six.PY3:
    from pathlib import Path
else:
    from pathlib2 import Path

import benchmark
import libraries
from web import chart

JSONS = {
    "tiny (50 bytes)": {"path": Path('../test_jsons/tiny.json'), "url": "https://github.com/ronlut/jsonperf/blob/master/test_jsons/tiny.json", "times": 10000},
    "small (3.5 kb)": {"path": Path('../test_jsons/small.json'), "url": "https://github.com/ronlut/jsonperf/blob/master/test_jsons/small.json", "times": 10000},
    "large (630 kb)": {"path": Path('../test_jsons/large.json'), "url": "https://github.com/ronlut/jsonperf/blob/master/test_jsons/large.json", "times": 100},
}


def main():
    perfs = libraries.instantiate_libraries()
    perfs_ab_sorted = sorted(perfs, key=lambda l: l.name)
    bnch = benchmark.Benchmark(perfs_ab_sorted)
    results = []
    for title, config in JSONS.items():
        with config["path"].open('rt', encoding='utf-8') as f:
            cur_jsn = f.read()

        cur_jsn = six.ensure_str(cur_jsn)  # this is needed for python 2
        result = bnch.run(cur_jsn, config.get("times"))
        results.append((title, result))

    chart_data = chart.generate_chart_data(results, urls=[config['url'] for config in JSONS.values()])
    with open('results.json', 'w') as f:
        json.dump(chart_data, f)


if __name__ == '__main__':
    main()
