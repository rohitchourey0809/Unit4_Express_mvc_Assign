//step1--->import mongoose


const mongoose = require('mongoose')

const userschema  = new mongoose.Schema(
    {
        firstname:{type:String,required:true},
        lastname :{type:String,required:true},
        gender:{type:String,required:true,default:"Male"},
        date_of_birth :{type:Date,required:true},
        type:{type:String,required:true,default:"Student"},
    },
    {
        versionKey : false,
        timestamps : true,
    })

    const User = mongoose.model("user",userschema)
    module.exports = User;