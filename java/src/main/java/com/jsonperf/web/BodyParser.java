package com.jsonperf.web;

import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.google.common.base.Predicates;
import com.google.common.base.Strings;
import com.google.common.net.HttpHeaders;
import com.google.gson.JsonElement;
import delight.fileupload.FileUpload;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.io.FilenameUtils;

import java.util.Arrays;
import java.util.List;
import java.util.TreeMap;

public class BodyParser {
    private static final String ATTACHED_FILE_PARAMETER = "file";

    public BodyParser() {
    }

    public Request parse(APIGatewayProxyRequestEvent request) {
        TreeMap<String, String> caseInsensitiveHeaders = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);
        caseInsensitiveHeaders.putAll(request.getHeaders());
        List<FileItem> files = FileUpload.parse(request.getBody().getBytes(), caseInsensitiveHeaders.get(HttpHeaders.CONTENT_TYPE));

        if (files.size() != 1) {
            throw new RuntimeException("must have one file exactly");
        }

        FileItem item = files.get(0);
        if (item.isFormField()) {
            throw new UnsupportedOperationException("must have files only");
        }

        validateFile(item);

        return new Request(item);
    }

    private void validateFile(FileItem item) {
        if (!item.getFieldName().equals(ATTACHED_FILE_PARAMETER)) {
            throw new UnsupportedOperationException("file with incorrect name");
        }

        String fileName = item.getName();
        if (Strings.isNullOrEmpty(fileName)) {
            throw new UnsupportedOperationException("no file name");
        }

        if (!fileName.contains(".") || !Arrays.asList("json", "txt").contains(FilenameUtils.getExtension(fileName).toLowerCase())) {
            throw new UnsupportedOperationException("invalid file");
        }

        // validate json
        new com.google.gson.Gson().fromJson(item.getString(), JsonElement.class);
    }
}
