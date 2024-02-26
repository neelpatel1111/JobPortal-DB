const express = require('express')
const router = express.Router()

// Model
const jobsModel = require('../models/jobsModel')

// Router
router.get('/', async (req, res) => {
    let result = await jobsModel.find()
    res.json(result)
})

router.get('/:id', async (req, res) => {
    let result = await jobsModel.findOne({_id : req.params.id})
    res.json(result)
})

router.post('/', async (req, res) => {
    let addData = req.body
    await jobsModel.create(addData)
    res.json(addData)
})

router.put('/', async (req ,res) => {
    let updateData = req.body;
    await jobsModel.updateOne({_id: req.body._id}, {$set:updateData})
    res.json(updateData)     
})

router.delete("/",async (req,res)=>{    
    let deleteData = req.body;
    await jobsModel.deleteOne({_id: req.body._id})
    res.json(deleteData)   
})

module.exports = router