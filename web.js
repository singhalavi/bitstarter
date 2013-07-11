var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
    var buffer = new Buffer(100);
    var len = buffer.write(fs.readFileSync("index.html"));
    response.send(buffer.toString("utf-8", 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
