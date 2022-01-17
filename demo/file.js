var file=require('fs')

file.readFile('calculator.js','utf8',function(err,data){
    console.log(data)
})

file.writeFile('file_demo.js','console.log("file written ")',function(err){
    console.log('written')
})