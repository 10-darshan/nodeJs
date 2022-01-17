var events=require('events');

var eventsEmitter=new events.EventEmitter();
var greet =function() {
    console.log('Welcome');
}
eventsEmitter.on('click',function(name){
    console.log(name);
})
eventsEmitter.emit("click",'darshan');