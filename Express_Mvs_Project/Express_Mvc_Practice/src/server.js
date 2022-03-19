const app = require("./index");
const connect = require("./configs/db");

app.listen(5001,async()=>{
    try{
        console.log("Server start at 5001")
        await connect()
        console.log("LisSTENIN PORT")
       
     
       }
       catch(err)
        {
           console.error(err.message)
        }
})



