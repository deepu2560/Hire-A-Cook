const express = require("express");

const router = express.Router();

const Cook = require("../Models/cookModel");

router.post("",async(req,res)=>{
    
    try{
        const cook = await Cook.create(req.body)
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})

router.get("",async(req,res)=>{
    try{
        const cook = await Cook.find().lean().exec()
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})

router.put("/:id",async(req,res)=>{
    try{
        const cook = await Cook.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})

router.delete("/:id",async(req,res)=>{
    try{
        const cook = await Cook.findByIdAndDelete(req.params.id)
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})

module.exports = router;