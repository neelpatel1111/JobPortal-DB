const express = require('express')
const router = express.Router()

// Model
const employerModel = require('../models/employerModel')

// Import Routers //
// const employerLogin = require('../routes/employerLogin')

// Router
router.get('/', async (req, res) => {
    let result = await employerModel.find()
    res.json(result)
})

router.get('/:id', async (req, res) => {
    let result = await employerModel.findOne({_id : req.params.id})
    res.json(result)
})

router.post('/', async (req, res) => {
    let addData = req.body

    let user = await employerModel.findOne({ email: addData.email })
    if (!user) {
        await employerModel.create(addData)
        res.json(addData)
    }
    else {
        res.send('Email Already Exist')
    }

})

router.put('/', async (req ,res) => {
    let updateData = req.body;
    await employerModel.updateOne({_id: req.body._id}, {$set:updateData})
    res.json(updateData)     
})

router.delete("/",async (req,res)=>{    
    let deleteData = req.body;
    await employerModel.deleteOne({_id: req.body._id})
    res.json(deleteData)   
})

//Login
router.post('/login', async (req, res)=>{

    let loginData = req.body

    try {
        let user = await employerModel.findOne({email: loginData.email})  
    
        if(user.password === loginData.password){
            res.send(user)
        }
        else{
            res.send('Invalid password')
        }
    
    } 
    catch (error) {
        res.send(error)
    }

})

module.exports = router