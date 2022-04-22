const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())

const CookSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:true},
    experience:{type:Number,required:true},
    categories :[{type:String,required:true}],
    rating:{type:Number,required:true},
    reviews:[{type:String,required:true}],
    cuisines:[{type:String,required:true}],
    images:{type:String,required:true}},
    {
        versionKey:false,
        timestamps:true
    }
    )

const Cook = mongoose.model("cook",CookSchema)

app.post("/cook/post",async(req,res)=>{
    
    try{
        const cook = await Cook.create(req.body)
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})
app.get("/cook/get",async(req,res)=>{
    try{
        const cook = await Cook.find().lean().exec()
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})
app.put("/cook/put/:id",async(req,res)=>{
    try{
        const cook = await Cook.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})

app.delete("/cook/delete/:id",async(req,res)=>{
    try{
        const cook = await Cook.findByIdAndDelete(req.params.id)
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})


let connect = mongoose.connect("mongodb+srv://cookAuth:deepanshu@cluster0.2sw65.mongodb.net/deepanshu?retryWrites=true&w=majority")
let port = 9479

app.listen(port,async()=>{
    try{
        await connect
        console.log("Connected to",port)
    }
    catch(err)
    {
        console.error(err)
    }
})

