var express = require("express");
var app = express();
app.get('/', function(req, res) {
    res.sendFile('index.html' , { root : __dirname});
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is runing on http://localhost:' + port);
});    