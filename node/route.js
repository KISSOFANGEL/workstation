function route(handle,pathname,response){
    console.log("route for"+pathname);
    if (typeof handle[pathname] === 'function') {
      return  handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404");
        response.end();
    }

}
exports.route= route;