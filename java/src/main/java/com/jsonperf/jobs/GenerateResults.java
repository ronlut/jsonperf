package com.jsonperf.jobs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.jsonperf.benchmark.Result;
import com.jsonperf.benchmark.Runner;
import com.jsonperf.benchmark.TitledBenchmark;
import com.jsonperf.jobs.config.File;
import com.jsonperf.jobs.config.Files;
import com.jsonperf.libraries.Instantiator;
import com.jsonperf.libraries.Library;
import com.jsonperf.web.Chart;
import com.jsonperf.web.Charts;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.Constructor;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.*;

public abstract class GenerateResults {
    private static final String BASE_PATH = "../test_jsons/";

    public static void main(String[] args) throws Exception {
        // todo: load jsons by files.yaml
        Yaml yaml = new Yaml(new Constructor(Files.class));

        Files files;
        try (FileReader file = new FileReader(Paths.get(BASE_PATH, "files.yaml").toFile())) {
            files = yaml.load(file);
        }

        // todo: instantiate com.jsonperf.libraries, sort by ab
        InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("project.properties");
        Properties p = new Properties();
        p.load(is);

        List<Library> libs = Instantiator.instantiate(p);
        libs.sort(Comparator.comparing(Library::getName));

        // todo: create benchmark
        Runner benchmarkRunner = new Runner(libs);
        List<TitledBenchmark> results = new ArrayList<>();

        for (File file : files.getFiles()) {
            String json = new String(java.nio.file.Files.readAllBytes(Paths.get(BASE_PATH, file.getName())), StandardCharsets.UTF_8);
            Map<String, Result> result = benchmarkRunner.run(json, file.getRuns(), 10);
            results.add(new TitledBenchmark(file.getTitle(), result, file.getUrl()));
        }

        List<Chart> charts = Charts.fromResults(results);
        try (FileWriter fileWriter = new FileWriter("results.json")) {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.writeValue(fileWriter, charts);
        }
    }
}
