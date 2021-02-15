package com.jsonperf.benchmark;

public class Result {
    private final double serialize;
    private final double deserialize;

    public Result(double serialize, double deserialize) {
        this.serialize = serialize;
        this.deserialize = deserialize;
    }

    public double getSerialize() {
        return serialize;
    }

    public double getDeserialize() {
        return deserialize;
    }
}
