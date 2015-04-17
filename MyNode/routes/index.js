/*
 var express = require('express');
 var router = express.Router();

 */
/* GET home page. *//*

 router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
 });

 module.exports = router;
 */
var server = require("../server.js");
var router = require("../routes/router.js");
var requestHandlers = require("../requestHandlers.js")
var handle={};
handle["/"] =  requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"]=requestHandlers.show;
server.start(router.route,handle);