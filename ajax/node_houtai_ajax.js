var http = require('http');
var url = require('url');
var util = require('util');


http.createServer(function(req, res) {
  if (req.method == "GET") {
    res.writeHead(200, {
      'content-Type': 'text/plain',
      "Access-Control-Allow-Origin": "*"
    });
    res.end(util.inspect(url.parse(req.url, true))); //处理get请求，并将结果传递给客户端
  } else if (req.method == "POST") {
    var str = '';
    // data shijian duocifasheng
    req.on('data', function(chunk) {
      str += chunk;
    });
    // zhiofashengyici
    req.on('end', function() {
      str = JSON.parse(str);
      console.log(str);
      res.writeHead(200, {
        'Content-Type': 'text/html',
        "Access-Control-Allow-Origin": "*"
      });
      res.end(util.inspect(str));
    });
  }
}).listen(8080);
