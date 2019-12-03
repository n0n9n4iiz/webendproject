var express = require("express");
var app = express();
app.use(express.static('project62'))
app.get('/', function(req, res) {
    res.sendFile('index.html' , { root : __dirname});
});
app.get('/home.html', function(req, res) {
    res.sendFile('home.html' , { root : __dirname});
});
app.get('/patient_manage.html', function(req, res) {
    res.sendFile('patient_manage.html' , { root : __dirname});
});
app.get('/selected_person.html', function(req, res) {
    res.sendFile('selected_person.html' , { root : __dirname});
});
app.get('/map_manage.html', function(req, res) {
    res.sendFile('map_manage.html' , { root : __dirname});
});


var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is runing on http://localhost:' + port);
});    