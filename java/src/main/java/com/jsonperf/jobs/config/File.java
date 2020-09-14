package com.jsonperf.jobs.config;

public class File {
    public String getTitle() {
        return title;
    }

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public int getRuns() {
        return runs;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setRuns(int runs) {
        this.runs = runs;
    }

    private String title;
    private String name;
    private String url;
    private int runs;
}
