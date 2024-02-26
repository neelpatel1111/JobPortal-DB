const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://neelkumarpatelco20d2:ZBYmnZN1EEg8HWox@testcluster.mcbyf9a.mongodb.net/?retryWrites=true&w=majority')
.then( ()=>console.log('Connection Successful') )
.catch( (err)=>console.log(err) )