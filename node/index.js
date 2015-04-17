var server = require("./service");
var route = require("./route");
var handlbar = require("./requestHandlbar");
var handl={}
handl["/"] = handlbar.start;
handl["/start"] = handlbar.start;
handl["/upload"] = handlbar.upload;
server.start(route.route,handl);


