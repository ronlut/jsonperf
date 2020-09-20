package com.jsonperf;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.net.HttpHeaders;
import com.jsonperf.benchmark.Result;
import com.jsonperf.benchmark.Runner;
import com.jsonperf.benchmark.TitledBenchmark;
import com.jsonperf.libraries.Instantiator;
import com.jsonperf.libraries.Library;
import com.jsonperf.web.BodyParser;
import com.jsonperf.web.Chart;
import com.jsonperf.web.Charts;
import com.jsonperf.web.Request;
import org.apache.commons.fileupload.FileUpload;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.util.*;

public class Handler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent>{
    public static void main(String[] args) {
        String body = "------WebKitFormBoundaryBEEXrEAnAes5TAvJ\r\nContent-Disposition: form-data; name=\"file\"; filename=\"test.json\"\r\nContent-Type: application/json\r\n\r\n\r\n------WebKitFormBoundaryBEEXrEAnAes5TAvJ--\r\n";
        Map<String, String> headers = new HashMap<>();
        headers.put(HttpHeaders.CONTENT_TYPE, "multipart/form-data; boundary=----WebKitFormBoundaryBEEXrEAnAes5TAvJ");
        new Handler().handleRequest(new APIGatewayProxyRequestEvent().withBody(body).withHeaders(headers), null);
    }
    private final Runner benchmarkRunner;
    private final BodyParser bodyParser;

    public Handler() {
        InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("project.properties");
        Properties properties = new Properties();
        try {
            properties.load(is);
        } catch (IOException e) {
            e.printStackTrace();
        }
        List<Library> libs = Instantiator.instantiate(properties);
        libs.sort(Comparator.comparing(Library::getName));
        this.benchmarkRunner = new Runner(libs);
        this.bodyParser = new BodyParser();

    }

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent event, Context context)
    {
        Request request;
        try {
            request = bodyParser.parse(event);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return errorResponse(e.getMessage(), HttpURLConnection.HTTP_BAD_REQUEST);
        }

        List<TitledBenchmark> results;
        try {
            Map<String, Result> result = benchmarkRunner.run(request.file.getString(), 100, 1);
            results = Collections.singletonList(new TitledBenchmark(request.file.getName(), result, null));
        } catch (Exception e) {
            e.printStackTrace();
            return errorResponse("internal", HttpURLConnection.HTTP_INTERNAL_ERROR);
        }

        List<Chart> charts = Charts.fromResults(results);
        ObjectMapper objectMapper = new ObjectMapper();
        String resultJson;
        try {
            resultJson = objectMapper.writeValueAsString(charts);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return errorResponse("internal", HttpURLConnection.HTTP_INTERNAL_ERROR);
        }
        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent().
                withIsBase64Encoded(false).
                withStatusCode(HttpURLConnection.HTTP_OK).
                withBody(resultJson);
        HashMap<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");
        response.setHeaders(headers);
        return response;
    }

    private APIGatewayProxyResponseEvent errorResponse(String body, int status) {
        HashMap<String, String> headers = new HashMap<>();
        headers.put(FileUpload.CONTENT_TYPE, "text/html");

        return new APIGatewayProxyResponseEvent().
                withHeaders(headers).
                withBody(body).
                withStatusCode(status);
    }
}