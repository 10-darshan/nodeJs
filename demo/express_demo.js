const express=require('express')

const app=express()

app.listen(9000, function(req, res){
    console.log('Running...')
})
app.get('/', function(req,res){
    res.send('Hello World !')
})

app.get('/student', function(req,res){
    const name=req.query.name
    if(name!=null)
    res.send('Hello '+name)
    else if(name=='darshan')
    res.redirect('/teacher?name='+name)
    else
    res.send('Hello Students !')
})

app.get('/student/:name', function(req,res){
    const name=req.params.name
    res.send('Hello '+name)
})

app.get('/teacher', function(req,res){
    const name=req.query.name
    res.send('Hello teacher'+name)
})