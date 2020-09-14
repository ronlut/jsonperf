package com.jsonperf.benchmark;

import com.google.common.base.Stopwatch;
import com.jsonperf.libraries.IMeasureable;

import java.time.Duration;

public abstract class MethodExecutionMeasure {
    public static <T> Duration measure(IMeasureable<T> method, T arg, int times, int repeat) throws Exception {
        Duration took = Duration.ofNanos(Long.MAX_VALUE);

        for (int i = 0; i < repeat; i++) {
            Stopwatch timer = Stopwatch.createStarted();
            for (int j = 0; j < times; j++) {
                method.invoke(arg);
            }
            timer.stop();
            Duration elapsed = timer.elapsed();
            took = took.compareTo(elapsed) < 0 ? took : elapsed;
        }

        return Duration.ofNanos(took.toNanos() / times);
    }
}
