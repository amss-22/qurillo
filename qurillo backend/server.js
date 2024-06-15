const express = require('express')
const app = express()
app.use(express.json())
const dotenv=require('dotenv').config()
const {connection}=require('./configure/configure')
const { userModel } = require('./db')
const cors = require('cors');


app.use(cors());


app.get('/', (req, res) => {  
  res.send('Hello World!')
})


app.post('/uploadData',async(req , res)=>{
  try{
    const {image}= req.body
    console.log("88888",image)
    const user= new userModel({
      image
    })
await userModel.insertMany(user)
res.send({message:"create successfully"})
  }catch(err){
console.error(err)
  }


})



app.listen(process.env.port || 3000, async() => {
  try{
    await connection
    console.log(`Example app listening on port ${process.env.port}`)

  }catch(err){
console.error(err)
  }
})