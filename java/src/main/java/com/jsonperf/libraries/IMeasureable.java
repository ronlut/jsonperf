package com.jsonperf.libraries;

public interface IMeasureable<T> {
    void invoke(T arg) throws Exception;
}
