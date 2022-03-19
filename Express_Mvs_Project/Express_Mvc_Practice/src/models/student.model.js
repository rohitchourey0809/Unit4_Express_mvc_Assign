const mongoose = require('mongoose')

const studentschema = new mongoose.Schema(
    {
        roll_id : {type : Number,required:true},
        currentbatch :{type:String,required:true}

    },
    {
        versionKey:false,
        timestamps:true,
    })

    const Student = mongoose.model("student",studentschema)

    module.exports = Student ;