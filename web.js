var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080; // may choose other ports as well, usually >1024
// for viewing on local computer use one of the following:
// http://localhost:8080
// http://hostname:8080 (replace hostname with the output of 'hostname' command executed in the terminal). e.g. http://narnia.local:8080
// from another device on the same network, find local ip (using '>> ifconfig | grep inet'), and then add the port. e.g. http://10.0.0.1:8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
