const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const connection=require('./connection.js');
const path=require('path');
const handleBars=require('express-handlebars');
//const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const courseRouter=require('./router/course.router.js');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views',path.join(__dirname,'/views/'));

app.engine('hbs',handleBars({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutsDir: __dirname+'/views/layouts',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
        }
}));

app.set('view engine','hbs');

app.get('/',(req,res)=> {
    //res.send('<h1 style="text-align:center">Welcome</h1>');
    res.render('index',{});
})
app.use('/course',courseRouter);

app.listen(9000,()=> {
    console.log('server running ...');
})