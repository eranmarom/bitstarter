var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});