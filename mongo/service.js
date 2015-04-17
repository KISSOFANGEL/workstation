/**
 * Created by lenovo on 2015/1/22.
 */
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

console.log("fuck");
app.listen(8080);
