package com.jsonperf.libraries;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Properties;

public class Jackson extends Library {
    private final ObjectMapper objectMapper;

    public Jackson(Properties projectProperties) {
        super(projectProperties);
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public String Serialize(Object obj) throws Exception {
        return objectMapper.writeValueAsString(obj);
    }

    @Override
    public Object Deserialize(String json) throws Exception {
        return objectMapper.readTree(json);
    }
}
