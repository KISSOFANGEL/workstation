var http = require("http");
var url = require("url");
 function start(route,handle){
     function onRequest(request,response){
         var pathname =  url.parse(request.url).pathname;
console.log("request for "+pathname);
         route(handle,pathname,response);
  
}
     http.createServer(onRequest).listen(8800);
     console.log("service has started");
 }
exports.start = start;