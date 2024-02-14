const mongoose =require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        Name:String,
        Email:String,
        Age:Number
    }
)

const UserModel =mongoose.model('userdata',UserSchema)

module.exports=UserModel