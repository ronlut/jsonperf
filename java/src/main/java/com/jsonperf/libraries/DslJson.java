//package com.jsonperf.libraries;
//
//import java.io.ByteArrayOutputStream;
//
//public class DslJson extends Library {
//
//    private final com.dslplatform.json.DslJson<Object> dslJson;
//
//    public DslJson() {
//        this.dslJson = new com.dslplatform.json.DslJson<>(new com.dslplatform.json.DslJson.Settings<>().includeServiceLoader());
//    }
//
//    @Override
//    public void Serialize(Object obj) throws Exception {
//        this.dslJson.serialize(obj, new ByteArrayOutputStream());
//    }
//
//    @Override
//    public void Deserialize(String json) throws Exception {
//        this.dslJson.dese
//    }
//}
