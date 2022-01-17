var fs=require('fs');
var readableStream=fs.createReadStream('demo_stream.txt');
var writableStream=fs.createWriteStream('demo_pipes.txt');
readableStream.pipe(writableStream);