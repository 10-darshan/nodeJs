const EventEmitter=require('events');
const event =new EventEmitter();

event.on('tap', function(status, message) {
    console.log("Hello people "+status+message);
})
event.on('tap', function() {
    console.log("Hi guys");
})
event.emit('tap',200,'ok');
