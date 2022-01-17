const { request, response } = require('express');
const http=require('http');
const fs=require('fs');

http.createServer(function(request, response) {
    if(request.url=='/about')
    {
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('about');
        response.end();
    }
    else if(request.url=='/home')
    {
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('home');
        response.end();
    }
    else if(request.url=='/')
    {
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('home');
        response.end();
    }
    else if(request.url=='/data')
    {
        response.writeHead(200,{'Content-Type':'application/json'});
        fs.readFile('exampleJson.json','utf-8',function(err,data) {
            response.write(data);
            response.end();
        })
    }
    else
    {
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('Error 404 ! Page not found');
        response.end();
    }
    
}).listen(9000);
console.log('Server Running...');