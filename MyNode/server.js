/**
 * Created by lenovo on 2015/4/14.
 */
var http = require("http");
var url = require("url");

function start(route,handle){
    function onRequest(request, response){
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        //console.log("Request for "+ pathname +" received.");
        request.setEncoding("utf-8");
        request.addListener("data",function(postDataChunk){
            postData += postDataChunk;
            console.log("received post data '"+postDataChunk+"'");
        });
        request.addListener("end",function(){
            route(handle,pathname,response,postData);
        })
    }

    http.createServer(onRequest).listen(8888);
   // console.log("Server has started.");
}

exports.start = start;