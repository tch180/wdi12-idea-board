///////////////
//Imports Variables from .env
///////////////
require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()




///////////////
// ## Mongoose Connection 
///////////////
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

const connection = mongoose.connection;
connection.on('connected', ()=>{
    console.log('-------------------------CONNECTED TO MONGODB, HE IS OVER LEVEL 9000')
})

connection.on('error', (err)=>{
    console.log('MongoDB Error:', err)
})

///////////////
//Middleware 
///////////////
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res)=>{
   res.sendFile(`${__dirname}/client/build/index.html`)
})
///////////////
//Server
///////////////
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`--------------------------Server IS UP AND RUNNING BOSS ON  ${PORT}`)

})