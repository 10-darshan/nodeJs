const express=require('express');
const router=express.Router();
const Student=require('../model/student.js');

router.get('/',async(req, res)=> {
    try{
        const student=await Student.find();
        res.json(student);
    }
    catch(error){
        res.send(error);
    }
});

router.get('/:id',async(req, res)=> {
    try{
        const student=await Student.findById(req.params.id);
        res.json(student);
    }
    catch(error){
        res.send(error);
    }
});

router.post('/',async(req, res)=>{
    const student=new Student({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    });
    try{
        const s=await student.save();
        res.json(s);
    }
    catch(error){
        res.send(error);
    }
});

router.patch('/:id',async(req, res)=> {
    try{
    const student =await Student.findById(req.params.id);
    if(req.body.name)
    student.name=req.body.name;
    if(req.body.email)
    student.email=req.body.email;
    if(req.body.city)
    student.city=req.body.city;
    
        const s=await student.save();
        res.json(s); 
    }
    catch(error){
        res.send(error);
    }
});

router.delete('/:id',async(req, res)=> {
    
    try{
        const student=Student.findById(req.params.id);
        (await student).deleteOne();
        res.send('deleted');
    }
    catch(error){
        res.send(error);
    }
})

module.exports=router;