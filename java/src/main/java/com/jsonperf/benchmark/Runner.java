package com.jsonperf.benchmark;

import com.jsonperf.libraries.Library;

import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Runner {
    private final List<Library> libs;

    public Runner(List<Library> libs) {
        this.libs = libs;
    }

    public Map<String, Result> run(String json, int runs, int repeat) throws Exception {
        HashMap<String, Result> result = new HashMap<>();

        for (Library lib : this.libs) {
            Object testObj = lib.Deserialize(json);
            Duration sMeasure = MethodExecutionMeasure.measure(lib::Deserialize, json, runs, repeat);
            Duration dMeasure = MethodExecutionMeasure.measure(lib::Serialize, testObj, runs, repeat);

            result.put(lib.toString(), new Result(sMeasure.toNanos() / 1_000_000.0, dMeasure.toNanos() / 1_000_000.0));
        }

        return result;
    }
}
