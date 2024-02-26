const mongoose = require('mongoose')

require('../db/conn')

const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    industry:{
        type: String,
        required: true
    },
    noOfEmployees:{
        type: Number,
        required: true
    },
    contactNo:{
        type: Number,
        required: false
    }
})

const employerModel = mongoose.model('employers', employerSchema)
module.exports = employerModel

