const express = require('express');
const dbConnect = require('./mongoDatabase');
const app = express();
app.use(express.json());

app.put('/',async(req,resp)=>{

    let data=await dbConnect();
    let result=data.updateOne(

        {name:"Apple"},
        {$set:{price:9000}}

    )
    resp.send({ result:"update"})
})
app.listen(5000);
