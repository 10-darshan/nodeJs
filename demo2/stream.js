const fs=require('fs');
const http=require('http');

//without stream 
/*
http.createServer(function(request, response) {
    fs.readFile('event.js','utf-8', function(error, data) {
        if(error)
        response.end(error.message);
        else
        response.end(data.toString());
    })
}).listen(9000);
*/

//with stream 
/*http.createServer(function(request, response) {
    const readStream=fs.createReadStream('event.js');
    readStream.on('data',function(chunk) {
        response.write(chunk);
    })
    readStream.on('end', function() {
        response.end();
    })
    readStream.on('error', function(error) {
        response.end(error.message);
    })
}).listen(9000);
*/

//with pipes
http.createServer(function(request, response) {
    const readStream=fs.createReadStream('event.js');
    readStream.pipe(response);
}).listen(9000);