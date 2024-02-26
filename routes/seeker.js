const express = require('express')
const router = express.Router()

// Model
const seekerModel = require('../models/seekerModel')

// Import Routers
// const seekerLogin =  require('../routes/seekerLogin')

// Router
router.get('/', async (req, res) => {
    let result = await seekerModel.find()
    res.json(result)
})

router.get('/:id', async (req, res) => {
    let result = await seekerModel.findOne({ _id: req.params.id })
    res.json(result)
})

router.post('/', async (req, res) => {
    let addData = req.body

    let user = await seekerModel.findOne({ email: addData.email })
    if (!user) {
        await seekerModel.create(addData)
        res.json(addData)
    }
    else {
        res.send('Email Already Exist')
    }

})

router.put('/', async (req, res) => {
    let updateData = req.body;
    await seekerModel.updateOne({ _id: req.body._id }, { $set: updateData })
    res.json(updateData)
})

router.delete("/", async (req, res) => {
    let deleteData = req.body;
    await seekerModel.deleteOne({ _id: req.body._id })
    res.json(deleteData)
})

//Login
router.post('/login', async (req, res) => {

    let loginData = req.body

    try {
        let user = await seekerModel.findOne({ email: loginData.email })

        if (user.password === loginData.password) {
            res.json(user)
        }
        else {
            res.send('Invalid password')
        }

    }
    catch (error) {
        res.send(error)
    }

})

module.exports = router