const express=require('express');
const mongoose=require('mongoose');
const app=express();
const url='mongodb://localhost:27017/student';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},function(error) {
    if(error)
    console.log(error.message);
    else
    console.log('success');
});

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('<h1>Welcome</h1>');
})
const alienRouter=require('./routers/studentRouter.js');
app.use('/student',alienRouter);
app.listen(9000,()=>{
    console.log("server running ...");
})








/*const con =mongoose.connection;
con.on('open',function() {
    console.log('mongoose running ...');
})*/
