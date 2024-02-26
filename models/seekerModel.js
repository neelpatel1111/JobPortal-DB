const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://neelkumarpatelco20d2:ZBYmnZN1EEg8HWox@testcluster.mcbyf9a.mongodb.net/?retryWrites=true&w=majority')

const seekerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required : false
    },
    skills: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('seekers', seekerSchema)