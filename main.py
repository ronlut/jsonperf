# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
import json
import sys

from orjson_perf import OrJsonPerf
from simplejson_perf import SimpleJsonPerf
from stdjson import StdJsonPerf
from ujson_perf import UJsonPerf

PRECISION_FORMAT = "{:.5f}"

TIMES = 100000


def main():
    from rapidjson_perf import RapidJsonPerf
    import timeit
    jsons = {
        "tiny (50 bytes)": """
    {
        "a": "b",
        "c": "d"
    }
    """,
        "small (3.5 kb)": """
    {"web-app": {
  "servlet": [   
    {
      "servlet-name": "cofaxCDS",
      "servlet-class": "org.cofax.cds.CDSServlet",
      "init-param": {
        "configGlossary:installationAt": "Philadelphia, PA",
        "configGlossary:adminEmail": "ksm@pobox.com",
        "configGlossary:poweredBy": "Cofax",
        "configGlossary:poweredByIcon": "/images/cofax.gif",
        "configGlossary:staticPath": "/content/static",
        "templateProcessorClass": "org.cofax.WysiwygTemplate",
        "templateLoaderClass": "org.cofax.FilesTemplateLoader",
        "templatePath": "templates",
        "templateOverridePath": "",
        "defaultListTemplate": "listTemplate.htm",
        "defaultFileTemplate": "articleTemplate.htm",
        "useJSP": false,
        "jspListTemplate": "listTemplate.jsp",
        "jspFileTemplate": "articleTemplate.jsp",
        "cachePackageTagsTrack": 200,
        "cachePackageTagsStore": 200,
        "cachePackageTagsRefresh": 60,
        "cacheTemplatesTrack": 100,
        "cacheTemplatesStore": 50,
        "cacheTemplatesRefresh": 15,
        "cachePagesTrack": 200,
        "cachePagesStore": 100,
        "cachePagesRefresh": 10,
        "cachePagesDirtyRead": 10,
        "searchEngineListTemplate": "forSearchEnginesList.htm",
        "searchEngineFileTemplate": "forSearchEngines.htm",
        "searchEngineRobotsDb": "WEB-INF/robots.db",
        "useDataStore": true,
        "dataStoreClass": "org.cofax.SqlDataStore",
        "redirectionClass": "org.cofax.SqlRedirection",
        "dataStoreName": "cofax",
        "dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver",
        "dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",
        "dataStoreUser": "sa",
        "dataStorePassword": "dataStoreTestQuery",
        "dataStoreTestQuery": "SET NOCOUNT ON;select test='test';",
        "dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log",
        "dataStoreInitConns": 10,
        "dataStoreMaxConns": 100,
        "dataStoreConnUsageLimit": 100,
        "dataStoreLogLevel": "debug",
        "maxUrlLength": 500}},
    {
      "servlet-name": "cofaxEmail",
      "servlet-class": "org.cofax.cds.EmailServlet",
      "init-param": {
      "mailHost": "mail1",
      "mailHostOverride": "mail2"}},
    {
      "servlet-name": "cofaxAdmin",
      "servlet-class": "org.cofax.cds.AdminServlet"},
 
    {
      "servlet-name": "fileServlet",
      "servlet-class": "org.cofax.cds.FileServlet"},
    {
      "servlet-name": "cofaxTools",
      "servlet-class": "org.cofax.cms.CofaxToolsServlet",
      "init-param": {
        "templatePath": "toolstemplates/",
        "log": 1,
        "logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
        "logMaxSize": "",
        "dataLog": 1,
        "dataLogLocation": "/usr/local/tomcat/logs/dataLog.log",
        "dataLogMaxSize": "",
        "removePageCache": "/content/admin/remove?cache=pages&id=",
        "removeTemplateCache": "/content/admin/remove?cache=templates&id=",
        "fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder",
        "lookInContext": 1,
        "adminGroupID": 4,
        "betaServer": true}}],
  "servlet-mapping": {
    "cofaxCDS": "/",
    "cofaxEmail": "/cofaxutil/aemail/*",
    "cofaxAdmin": "/admin/*",
    "fileServlet": "/static/*",
    "cofaxTools": "/tools/*"},
 
  "taglib": {
    "taglib-uri": "cofax.tld",
    "taglib-location": "/WEB-INF/tlds/cofax.tld"}}}
    """
    }

    min_took = sys.maxsize
    perfs = [RapidJsonPerf(), SimpleJsonPerf(), OrJsonPerf(), StdJsonPerf(), UJsonPerf()]
    results = {}
    for title, cur_jsn in jsons.items():
        results[title] = [
            ["test"] + [perf.name_with_version for perf in perfs],
            ["serialize"],
            ["deserialize"]
        ]
        test_object = json.loads(cur_jsn)
        for p in perfs:
            total_time_took = timeit.timeit(lambda: p.deserialize(cur_jsn), number=TIMES)
            took_ms = total_time_took / TIMES * 1000
            took_str = PRECISION_FORMAT.format(took_ms)
            results[title][2].append(took_str)
            print("{}: {}".format(p.name_with_version, took_str))

            total_time_took = timeit.timeit(lambda: p.serialize(test_object), number=TIMES)
            took_ms = total_time_took / TIMES * 1000
            took_str = PRECISION_FORMAT.format(took_ms)
            results[title][1].append(took_str)
            # print(took)
            # if min_took != 0 and took > min_took:
            #     print((took / min_took - 1)*100)
            # min_took = min(min_took, took)
            # t = timeit.Timer(lambda: p.deserialize(jsn))
            # autorange_took = t.autorange()
            # print(autorange_took)
            # print(autorange_took[1] / autorange_took[0])

    with open('results.json', 'w') as f:
        json.dump(results, f)

if __name__ == '__main__':
    main()
