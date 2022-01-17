var fs=require('fs');

var writeableStream=fs.createWriteStream('demo_stream.txt');
var data='\nThis line has been added via the write stream';
writeableStream.write(data,'utf8');
writeableStream.end();
writeableStream.on('finish',function(){
    console.log('file updated');
})