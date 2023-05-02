const express = require('express');
const dbConnect = require('./mongoDatabase');
const app = express();
app.use(express.json());

app.put('/',async(req,resp)=>{

    let data=await dbConnect();
    let result=data.updateOne(

        {name:req.body.name},
        {$set:req.body}

    )
    resp.send({ result:"update"})
})
app.listen(5000)