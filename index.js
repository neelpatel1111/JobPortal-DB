const express = require('express')
const PORT = process.env.PORT || 3001
var bodyParser = require('body-parser')

// Router Imports //
const employerRouter = require('./routes/employer')
const jobsRouter = require('./routes/jobs') 
const seekerRouter = require('./routes/seeker')

// app //
const app = express()

// Body Parser //
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routing... //
app.use('/employer', employerRouter)
app.use('/jobs', jobsRouter)
app.use('/seeker', seekerRouter)

app.get('/',(req,res)=>{
    res.send(`API is running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log('Server is running at PORT:',PORT)
}).on("error",
    (err) => {
        console.log(`Error: ${err}`)
    });  // Listen on port 3001