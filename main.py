import json
from pathlib import Path

import benchmark
import libraries
from web import chart

JSONS = {
    "tiny (50 bytes)": {"path": Path('data/tiny.json'), "times": 10000},
    "small (3.5 kb)": {"path": Path('data/small.json'), "times": 10000},
    "large (630 kb)": {"path": Path('data/large.json'), "times": 100},
}


def main():
    perfs = libraries.instantiate_libraries()
    perfs_ab_sorted = sorted(perfs, key=lambda l: l.name)
    bnch = benchmark.Benchmark(perfs_ab_sorted)
    results = []
    for title, config in JSONS.items():
        with config["path"].open('r') as f:
            cur_jsn = f.read()

        result = bnch.run(cur_jsn, config.get("times"))
        results.append((title, result))

    chart_data = chart.generate_chart_data(results)
    with open('results.json', 'w') as f:
        json.dump(chart_data, f)


if __name__ == '__main__':
    main()
