const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Course = mongoose.model('Course1');
//const Course=require('../model/course.model.js');

router.get('/', (req, res) => {
    Course.find((error, docs) => {
        if (error)
            console.log(error);
        else
            res.json(docs);
    })
});

router.get('/:id', (req, res) => {
    Course.findById(req.params.id, (error, docs) => {
        if (error)
            console.log(error);
        else {
            res.json(docs);
        }
    });
});

router.patch('/:id', (req, res) => {
    
            Course.updateOne({ _id: req.params.id }, {
                $set: {
                    courseName: req.body.courseName,
                    courseDuration: req.body.courseDuration,
                    courseDescription: req.body.courseDescription
                }
            }, (error, doc) => {
                if (error)
                    console.log(error);
                else
                    res.json(doc);
            });
     
});

router.post('/', (req, res) => {
    let course = new Course();
    course.courseId = Math.ceil(Math.random() * 100000);
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseDescription = req.body.courseDescription;

    course.save((error, doc) => {
        if (error)
            console.log(error);
        else
            res.json(doc);
    });
});

router.delete('/:id', (req, res) => {
    Course.findById(req.params.id, (error, docs) => {
        if (error)
            console.log(error);
        else {
            docs.deleteOne();
            res.send('deleted');
        }
    });
});

module.exports = router;