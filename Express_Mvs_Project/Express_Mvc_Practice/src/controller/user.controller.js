const User = require("../models/user.model")
const express= require("express");
const router = express.Router();


router.post("/",async function(req, res){
    try{
        const userdata = await User.create(req.body)
        console.log(userdata)
        return res.send(userdata)
    }catch(err){
        //  return res.send(err)
        console.error(err.message)
    }
})
router.get("/",async function(req, res){
    try{
        const userdata = await User.find().lean().exec()
        // console.log(userdata)
        return res.send(userdata)
    }catch(err){{
         res.send(err)
    }}
})

module.exports = router ;