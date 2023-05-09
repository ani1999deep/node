const express=require("express");
const connection=require("./configSql")
const app=express()

app.get("/",(req,resp)=>{

    resp.send("route done")

    connection.query(" select * from users",(err,result)=>{

            if(err)
            {
                resp.send("error")
            }
            else{
                resp.send(result)
            }
    })
})

app.listen(5000,()=>{ console.log("Port is open")})