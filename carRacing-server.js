var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'))
// viewed at http://localhost:8080
const PORT=1010;
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/carGame.html'));
});

var server = app.listen(PORT, function () {

    var host = server.address().address
    console.log();
    var port = server.address().port
    console.log("Car Racing Game is started at http://%s:%s", host, port)
 })