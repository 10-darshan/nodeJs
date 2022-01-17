var querystring=require('querystring');

exports.home=function(response) {
    console.log("Routing to home");
    var htmlFile='<html>'+
    '<body>'+
    '<form action="/review" method="get">'+
    '<textarea name="text" col="60" row="20"></textarea>'+
    '<input type="submit" value="Post">'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(htmlFile);
    response.end();
}
exports.review=function(response, reviewData) {
    console.log("Routing to review "+reviewData);
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Your review is '+querystring.parse(reviewData).text);
    response.end();
}