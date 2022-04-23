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
    let rate = req.query.rate || 1;
    const page = req.query.page || 1;
    const size = req.query.size || 5;
    try{
        const cook = await Cook.find().skip((page-1)*size).limit(size)
        .sort({"rate":rate}).lean().exec()
        return res.send(cook)
    }
    catch(error)
    {
        return res.send({error})
    }
    
})

router.get("/:id",async(req,res)=>{
    try{
        const cook = await Cook.findById(req.params.id);
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
