const mongoose = require('mongoose');


const batchschema = new mongoose.Schema(
    {
        Batchname:{type:String,required:true}
    },
    {
        versionKey : false,
        timestamps : true,
    })


    const Batch = mongoose.model("batch",batchschema);

    module.exports = Batch ;