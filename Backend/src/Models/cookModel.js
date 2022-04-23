const mongoose = require("mongoose")

const CookSchema = new mongoose.Schema({
    
    name: {type:String,required:true},
    email: {type:String,required:true},
    mobile: {type:Number,required:true},
    experience: {type:Number,required:true},
    categories: [{type:String,required:true}],
    rating: {type:Number,required:true},
    reviews: [{type:String,required:true}],
    cuisines: [{type:String,required:true}],
    images: {type:String,required:true},
    rate: {type:Number,required:true}
},
    {
        versionKey:false,
        timestamps:true
    }
    )

module.exports = mongoose.model("cook",CookSchema)