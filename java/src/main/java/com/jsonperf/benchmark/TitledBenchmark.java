package com.jsonperf.benchmark;

import java.util.Map;

public class TitledBenchmark {
    private final String title;

    private final Map<String, Result> results;

    private final String url;

    public TitledBenchmark(String title, Map<String, Result> results, String url) {
        this.title = title;
        this.results = results;
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public Map<String, Result> getResults() {
        return results;
    }

    public String getUrl() {
        return url;
    }
}
