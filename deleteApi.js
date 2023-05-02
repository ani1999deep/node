const express = require('express');
const dbConnect = require('./mongoDatabase');
const app = express();
const mongodb=require('mongodb')
app.use(express.json());

app.delete("/:id",async(req,resp)=>{

        console.log(req.params.id)
        const data=await dbConnect();
        const result=await data.deleteOne({_id:   new mongodb.ObjectId(req.params.id)})
        resp.send(result,"Done")
})

app.listen(5000) 