from typing import Tuple, List


def generate_chart_data(results, urls=None, precision_format="{:.5f}"):
    # type: (List[Tuple[str, dict]], list, str) -> list
    chart_data = []
    if not urls:
        urls = [None] * len(results)

    for i, ((title, json_results), url) in enumerate(zip(results, urls)):
        cur_result = {
            "title": title,
            "data": [
                ["test"],
                ["serialize"],
                ["deserialize"]
            ]}

        if url:
            cur_result['url'] = url

        for lib_name, benchmark_result in json_results.items():
            cur_result['data'][0].append(lib_name)
            cur_result['data'][1].append(precision_format.format(benchmark_result.serialize))
            cur_result['data'][2].append(precision_format.format(benchmark_result.deserialize))

        chart_data.append(cur_result)

    return chart_data
