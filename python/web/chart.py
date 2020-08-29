from typing import Tuple, List


def generate_chart_data(results, precision_format="{:.5f}"):
    # type: (List[Tuple[str, dict]], str) -> dict
    chart_data = {}
    for title, json_results in results:
        chart_data[title] = [
            ["test"],
            ["serialize"],
            ["deserialize"]
        ]

        for lib_name, benchmark_result in json_results.items():
            chart_data[title][0].append(lib_name)
            chart_data[title][1].append(precision_format.format(benchmark_result.serialize))
            chart_data[title][2].append(precision_format.format(benchmark_result.deserialize))

    return chart_data
