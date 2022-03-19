const mongoose = require('mongoose');

const evaluationschema = new mongoose.Schema({
    date_of_evaluation :{type:Date,required:true},
    user_id : {type:String,required:true},
    batch_id : {type:String,required:true},
},
{
    versionKey : false,
    timestamps : true,
})

const Evaluation = mongoose.model("evaluation",evaluationschema)

module.exports = Evaluation ;