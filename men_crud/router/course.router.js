const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Course = mongoose.model('Course');
//const Course=require('../model/course.model.js');

router.get('/list', (req, res) => {
    Course.find((error, docs) => {
        if (error)
            console.log(error);
        else
            res.render('list', { data: docs });
    })
});

router.get('/list/:id', (req, res) => {
    Course.findById(req.params.id, (error, docs) => {
        if (error)
            console.log(error);
        else {
            console.log(docs)
            res.render('list', { data: docs });
        }
    });
});

router.get('/add', (req, res) => {
    res.render('addCourse', { courseTitle: 'ADD COURSE' });
});

router.get('/edit/:id', (req, res) => {
    Course.findById(req.params.id, (error, docs) => {
        if (error)
            console.log(error);
        else
            res.render('addCourse', {
                courseTitle: 'UPDATE COURSE',
                data: docs
            });
    });
});

router.post('/addCourse', (req, res) => {
    let course = new Course();
    course.courseId = Math.ceil(Math.random() * 100000);
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseDescription = req.body.courseDescription;

    if (req.body._id == '') {

        course.save((error, doc) => {
            if (error)
                console.log(error);
            else
                res.redirect('/course/list');
        });
    }
    else {
        Course.updateOne({ _id: req.body._id }, {
            $set: {
                courseName: req.body.courseName,
                courseDuration: req.body.courseDuration,
                courseDescription: req.body.courseDescription
            }
        }, (error, doc) => {
            if (error)
                console.log(error);
            else
                res.redirect('/course/list');
        });
    }
});

router.get('/delete/:id', (req, res) => {
    Course.findById(req.params.id, (error, docs) => {
        if (error)
            console.log(error);
        else {
            docs.deleteOne();
            res.redirect('/course/list');
        }
    });
});

module.exports = router;