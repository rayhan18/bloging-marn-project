const express = require('express')
const dotenv = require('dotenv')


dotenv.config({
    path:'backend/config/config.env'
})
const app = express()
 const PORT = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send('server is running')
})


 app.listen(PORT ,(error )=>{
    if(error){
        console.log(`server is running port ${PORT}`)
    }
 })