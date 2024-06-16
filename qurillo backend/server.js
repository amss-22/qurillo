const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const {connection}=require('./configure/configure')
const { userModel, notificationModel, invitedUsers} = require('./db')
const cors = require('cors');


app.use(cors());


app.get('/', (req, res) => {  
  res.send('Hello World!')
})


app.post('/uploadData',async(req , res)=>{
  try{
    const {image}= req.body
    const user= new userModel({
      image
    })
await userModel.insertMany(user)
res.send({message:"create successfully",user})
  }catch(err){
console.error(err)
  }
})

app.post('/addNotification',async(req , res)=>{
  try{
    const notification= new notificationModel(req.body)
await notificationModel.insertMany(notification)
res.send({message:"create successfully",notification})
  }catch(err){
console.error(err)
  }})


app.get('/getNotification',async (req, res) => {  
  try{
const response=await notificationModel.find()
res.send({message:"create successfully",response})
  }catch(err){
console.error(err)
  }
  
})
//user routes

app.post('/invitedUser',async(req , res)=>{
  try{
    const invited= new invitedUsers(req.body)
await invitedUsers.insertMany(invited)
res.send({message:"create successfully",invited})
  }catch(err){
console.error(err)
  }})


app.get('/getInvitedUsers',async (req, res) => {  
  try{
const response=await invitedUsers.find()
res.send({message:"create successfully",response})
  }catch(err){
console.error(err)
  }
  
})



app.listen(process.env.port || 5000, async() => {
  try{
    await connection
    console.log(`Example app listening on port ${process.env.port}`)

  }catch(err){
console.error(err)
  }
})