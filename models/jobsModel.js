const mongoose =  require('mongoose')

mongoose.connect('mongodb+srv://neelkumarpatelco20d2:ZBYmnZN1EEg8HWox@testcluster.mcbyf9a.mongodb.net/?retryWrites=true&w=majority')

const jobsSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    employerId:{
        type: String,
        required: true
    },
    employerName:{
        type: String,
        required: true
    },
    skills: {
        type: String, 
        required: false 
    },
    pay:{
        type: String, 
        required: false 
    },
    type:{
        type :String ,
        required: false 
    },
    shift:{
        type :String ,
        required: false 
    },
    location:{
        type :String ,
        required: false 
    },
    desc:{
        type:String, 
        required: true
    }
});

const jobsModel = mongoose.model('jobs',jobsSchema);
module.exports = jobsModel;

