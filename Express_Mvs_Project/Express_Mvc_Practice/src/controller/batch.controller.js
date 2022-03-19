const Batch = require('../models/batch.model')

const express = require('express')
const router = express.Router()

router.post("/",async function(req,res){
   try{
    const batchdata = await Batch.create(req.body)
    console.log(batchdata)
    return res.send(batchdata)
   }
   catch(err){
       console.error(err.message)
   }
})

router.get("/",async function(req,res){
    try{
     const batchdata = await Batch.find().lean().exec()
     console.log(batchdata)
     return res.send(batchdata)
    }
    catch(err){
        console.error(err.message)
    }
 })

 module.exports = router ;