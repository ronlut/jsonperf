package com.jsonperf.libraries;

import com.google.gson.JsonElement;

import java.util.Properties;

public class Gson extends Library {
    private final com.google.gson.Gson gson;

    public Gson(Properties projectProperties) {
        super(projectProperties);
        this.gson = new com.google.gson.Gson();
    }

    @Override
    public String Serialize(Object obj) {
        return gson.toJson(obj);
    }

    @Override
    public Object Deserialize(String json) {
        return gson.fromJson(json, JsonElement.class);
    }
}
