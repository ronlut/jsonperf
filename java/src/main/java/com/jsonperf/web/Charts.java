package com.jsonperf.web;

import com.jsonperf.benchmark.Result;
import com.jsonperf.benchmark.TitledBenchmark;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public abstract class Charts {
    public static ArrayList<Chart> fromResults(List<TitledBenchmark> results) {
        ArrayList<Chart> charts = new ArrayList<>(results.size());

        for (TitledBenchmark result : results) {
            Chart chart = new Chart(result.getTitle(), result.getUrl());
            for (Map.Entry<String, Result> entry : result.getResults().entrySet()) {
                chart.addLibResult(entry.getKey(), entry.getValue());
            }

            charts.add(chart);
        }

        return charts;
    }
}
