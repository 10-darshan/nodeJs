exports.route=function(pathname, handle, response, reviewData) {
    console.log("Routing request for "+pathname);
    if(typeof handle[pathname]==='function')
        handle[pathname](response, reviewData);
    else
    {
        console.log("No handler for "+pathname);
        response.writeHead(404,{'Content-Type': 'text/plain'});
        response.write("Error 404! Page not fond");
        response.end();
    }
    

}