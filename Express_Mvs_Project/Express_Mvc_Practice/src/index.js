const express = require("express")
const userdata  = require("./controller/user.controller")
const studentdata = require("./controller/student.controller")
const batchdata = require("./controller/batch.controller")
const evaluationdata = require("./controller/evaluation.controller")



const app = express()
app.use(express.json())

app.use("/userlink",userdata)
app.use("/studentlink",studentdata)
app.use("/batchlink",batchdata)
app.use("evaluationlink",evaluationdata)

module.exports = app;
