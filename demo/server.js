var http=require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Welcome to NodeJs !!!");
    res.end();
}).listen(9000);