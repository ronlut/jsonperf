package com.jsonperf.web;

import org.apache.commons.fileupload.FileItem;

public class Request {
    public final FileItem file;
    public Request(FileItem file) {
        this.file = file;
    }
}
