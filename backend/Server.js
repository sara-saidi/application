const express=require('express')
const { default: mongoose } = require('mongoose')
const mangoose=require('mongoose')
const router = require('./routes/ToDoRoute')
const cors=require('cors')
const routes=require('./routes/ToDoRoute')
require('dotenv').config()

const app=express()
const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.listen(PORT,()=>
    console.log(`listining on :${PORT}`)
)

mongoose.connect(process.env.MongoDb_URL)
.then(()=>console.log('connected to mongoDb ...'))
.catch((err)=>console.log(err))

app.use(routes)