var file=require('fs')

file.appendFile('file_demo.js','\nconsole.log("file appended")',function(err){
    console.log('appended')
})