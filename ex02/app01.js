var http = require('http');
var port = 9090;
var server = http.createServer(function (req, res) {
    res.writeHead(200,{ // 200 응답, header 내용
        'Content-Type': 'text/html'
    });
    res.end('<h1>Hell WorlD</h1>'); //body 내용
    
});

server.listen(port,function () {
    console.log('server: starts.... ['+port+']');
});