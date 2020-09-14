package com.jsonperf.libraries;

import java.util.Properties;

public abstract class Library implements ISerializer, IDeserializer {
    private final Properties properties;

    public Library(Properties projectProperties) {
        this.properties = projectProperties;
    }

    public String getName() {
        return this.getClass().getSimpleName();
    }

    public String getVersion() {
        return this.properties.getProperty(String.format("%s.version", getName()));
    }

    @Override
    public String toString() {
        return String.format("%s %s", getName(), getVersion());
    }
}
