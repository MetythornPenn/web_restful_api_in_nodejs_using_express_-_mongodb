const mongoose = require('mongoose');
const validator = require('validator');

const jobSchema = new mongoose.Schema({

    title: {
        type : String,
        required : [true, 'Please enter Job title'],
        trim : true,
        maxlength : [100, 'Job title can not exceed 100 characters.']
    },

    slug : String,
    description: {
        type : String,
        required : [true, 'Please enter job description.'],
        maxlenght : [1000, 'Job description can not exceed 1000 character.']
    },

    email : {
        type : String,
        validate : [validator.isEmail, 'Please add a valid email address.']
    },

    address : {
        type : String,
        required : [true, 'Please add an address.']
    },

    company : {
        type : String,
        required : [true, 'Please add Company name.']
    },

    industry : {
        type : [String],
        required : true,
        enum : {
            values : [
                'Business',
                'Information Techonology',
                'Banking',
                'Education/Training',
                'Telecommunication',
                'Other'
            ],
            message : 'Please select correct options for industry.'
        }
    },

    jobType: {
        type: String,
        required: true,
        enum : {
            value : [
                'Permanent',
                'Temporary',
                'Internship'
            ],
            message : 'Please select correct options for industry.'
        }
    },

    minEducation : {
        type : String,
        required : true,
        enum : {
            value : [
                'Bachelors',
                'Master',
                'Phd'
            ],
            message : 'Please select correct options for Eduction.'
        }
    },

    positions : {
        type : Number,
        default : 1
    },

    experience : {
        type : String,
        required : true,
        enum : {
            value : [
                'No Experience',
                '1 Year - 2 Years',
                '2 Year - 5 Years',
                '5 Years+'
            ],
            message : 'Please select correct options for Experience.'
        }
    },

    salary : {
        type : Number,
        required : [true, 'Please enter expected salary for this job.']
    },

    postingDate : {
        type : Date,
        default : Date.now
    },

    lastDate : {
        type : Date,
        default : new Date().setDate(new Date().getDate() + 7)
    },

    applicantsApplied : {
        type : [Object],
        select : false,
    }


});

module.exports = mongoose.model('Job', jobSchema);