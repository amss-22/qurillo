const Mongoose= require('mongoose')


const userSchema=Mongoose.Schema({
   image:"string"
    })
const userModel=Mongoose.model('user', userSchema)

module.exports={
    userModel
}