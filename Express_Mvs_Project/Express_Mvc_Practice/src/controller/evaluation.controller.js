const Evaluation = require('../models/evaluation.model')

const express = require('express')
const router = express.Router()

router.post("/",async function(req, res){
   try{
    const evaluationdata = await Evaluation.create(req.body)
    console.log(evaluationdata)
    return res.send(evaluationdata)
   }
   catch(err){
       console.error(err.message)
   }
})


router.get("/",async function(req, res){
    try{
     const evaluationdata = await Evaluation.find().lean().exec()
     console.log(evaluationdata)
     return res.send(evaluationdata)
    }
    catch(err){
        console.error(err.message)
    }
 })

 module.exports = router ;
