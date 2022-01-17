const express=require('express');
const app=express();
const connection=require('./connection.js');
const courseRouter=require('./router/course.router.js');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


app.use(express.json());

app.get('/',(req,res)=> {
    res.send('<h1 style="text-align:center">Welcome</h1>');
})
app.use('/course',courseRouter);

app.listen(9000,()=> {
    console.log('server running ...');
})