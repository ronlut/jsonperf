package com.jsonperf.libraries;

import org.reflections.Reflections;

import java.lang.reflect.Constructor;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

public abstract class Instantiator {
    public static List<Library> instantiate(Properties properties) {
        Reflections reflections = new Reflections("com.jsonperf.libraries");
        return reflections.getSubTypesOf(Library.class).stream().map(libClass -> {
            Constructor<? extends Library> constructor = null;
            try {
                constructor = libClass.getConstructor(Properties.class);
                return constructor.newInstance(properties);
            } catch (Exception e) {
                e.printStackTrace();
                throw new RuntimeException(e);
            }
        }).collect(Collectors.toList());
    }
}
