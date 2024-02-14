const express =require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const UserModel=require('./Models/users')
const app= express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sp21bse038:root@cluster0.iwnzsgl.mongodb.net/crud")

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(result=>res.json(result))
}
)

app.get('/getuser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.find({_id:id})
    .then(data=>res.json(data))
})
app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{Name:req.body.Name,Email:req.body.Email,Age:req.body.Age})
    .then(user=>res.json(user))
})
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
})

app.post('/createuser',(req,res)=>{
    UserModel.create(req.body)
    .then(data=>res.json(data))
})


app.listen(3001,()=>{
    console.log("Server is running")
})