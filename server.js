var http = require('http')
var url = require('url')
var queryString = require( "querystring" );

var port = 5000
if (process.argv[2]) {
  port = Number(process.argv[2])
}

var server = http.createServer(function (req, res) {

  console.log("* " + req.method + " ************************************")
  console.log(req.url)
  console.log(req.headers)

  var bodyData = '';

  req.on('data', function(chunk) {
    bodyData += chunk.toString();
  });

  req.on('end', function() {
    console.log(bodyData)

    res.writeHead(200, "OK", {'Content-Type': 'application/json'});
    res.end();
  });

})

server.listen(port)

console.log("Server listening on " + port)
