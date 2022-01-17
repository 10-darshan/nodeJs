const mongoose=require('mongoose');
const url='mongodb://localhost:27017/demodb';
mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true },(error)=>{
    if(!error)
        console.log('connected with mongodb ...');
    else
    console.log(error);
})
const Course1=require('./model/course.model.js'); 