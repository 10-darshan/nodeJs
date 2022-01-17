var file=require('fs')

file.unlink('delete_demo.js', function(err){
    //console.log(err.message)
    console.log('deleted')
    
})