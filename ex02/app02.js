const { fstat, readFile } = require('fs');
var http = require('http');
var fs = require('fs');

var port = 9090;
var server = http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url === '/'){
        req.url = '/index.html';
    }
    fs.readFile(__dirname + '/public'+req.url,function(error, data) {
        res.writeHead(200,{ // 200 응답, header 내용
            'Content-Type': 'text/html'
        });
        res.end('<h1>Hell WorlD</h1>'); //body 내용        
    });

    
});

// 서버 실행
server.listen(port,function () {
    console.log('server: starts.... ['+port+']');
});