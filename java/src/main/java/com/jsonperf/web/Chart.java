package com.jsonperf.web;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.jsonperf.benchmark.Result;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Chart {
    public final String title;
    @JsonProperty("timestamp_s")
    public final Long timestampSecond;
    public final List<List<String>> data;

    @JsonIgnore
    public final String precisionFormat;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    public final String url;

    public Chart(String title, Long timestampSecond, List<List<String>> data, String precisionFormat, String url) {
        this.title = title;
        this.timestampSecond = timestampSecond;
        this.data = data;
        this.precisionFormat = precisionFormat;
        this.url = url;
    }

    public Chart(String title) {
        this(title, null);
    }

    public Chart(String title, String url) {
        this(title, java.time.Instant.now().getEpochSecond(), initialData(), "%.5f", url);
    }

    public void addLibResult(String name, Result result) {
        this.data.get(0).add(name);
        this.data.get(1).add(String.format(this.precisionFormat, result.getSerialize()));
        this.data.get(2).add(String.format(this.precisionFormat, result.getDeserialize()));
    }

    private static List<List<String>> initialData() {
        return Arrays.asList(
                new ArrayList<>(Collections.singletonList("test")),
                new ArrayList<>(Collections.singletonList("serialize")),
                new ArrayList<>(Collections.singletonList("deserialize"))
        );
    }
}
