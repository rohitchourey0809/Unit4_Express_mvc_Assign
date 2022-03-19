const Student = require("../models/student.model")
const express = require("express")
const router = express.Router()

router.post("/",async function (req, res) {
  try{
    const studentdata = await Student.create(req.body)
    console.log(studentdata)
    return res.send(studentdata)
  }
  catch(err){
      console.log(err)
  }
})

router.get("/",async function (req, res) {
    try{
      const studentdata = await Student.create(req.body)
      console.log(studentdata)
      return res.send(studentdata)
    }
    catch(err){
        console.errro(err.message)
    }
  })

  module.exports = router ;


