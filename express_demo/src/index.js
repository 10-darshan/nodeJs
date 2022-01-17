const express=require('express');
const app=express();
const path=require('path');

staticPath=path.join(__dirname,'../public');
templatePath=path.join(__dirname,'../views');
//app.use(express.static(staticPath));
app.set('views', templatePath);
app.set('view engine', 'hbs');

app.get('/',function(request,response) {
    response.render('index');
})

app.get('/info',function(request,response) {
    const username=request.query.username;
    const password=request.query.password;
    console.log(username);
    console.log(password); 
    if(username=='darshan' && password=='kaal')
    response.render('info');
    else 
    response.render('index',{ message:'Login Failed!'});
})

app.listen(9000,'127.0.0.1',function() {
    console.log("server running ...");
});

app.get('/',function(request, response) {
    response.send('Home Page');
})
app.get('/about',function(request, response) {
    response.send('About Page');
})
app.get('/help',function(request, response) {
    response.send('Help Page');
})
app.get('/info/*',function(request, response) {
    response.render('404',{
        errorMessage:'Oops! Info Page could not be found'
    });
})
app.get('*',function(request, response) {
    response.render('404',{
        errorMessage:'Oops! Page could not be found'
    });
})