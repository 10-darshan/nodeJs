var http = require('http');
var url= require('url')

exports.createServer= function(route, handle) {
    http.createServer(function (request, response) {
        var reviewData='';
        var pathname=url.parse(request.url).pathname;
        request.setEncoding('utf8');
        request.addListener('data',function(chunk) {
            reviewData+=chunk;
        })
        request.addListener('end',function() {
            console.log(reviewData);
            route(pathname, handle, response, reviewData);
        })
    }).listen(9000);
    console.log('server running...');
}