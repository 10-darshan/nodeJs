
var server=require('./demo_app_server.js');
var router=require('./demo_app_router.js');
var handler=require('./handler.js');

var handle={};
handle['/']=handler.home;
handle['/home']=handler.home;
handle['/review']=handler.review;

server.createServer(router.route, handle);