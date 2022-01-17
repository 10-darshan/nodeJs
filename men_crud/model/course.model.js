const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    courseId: {
        type: Number,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseDuration: {
        type: Number,
        required: true
    },
    courseDescription: {
        type: String
    }
});
module.exports=mongoose.model('Course',courseSchema);