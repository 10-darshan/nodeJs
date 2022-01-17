var file=require('fs')


file.writeFile('file_demo.js','console.log("file written ")',function(err){
    console.log('written')
})