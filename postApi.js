const express = require('express');
const dbConnect = require('./mongoDatabase');
const app = express();

//data get from request or postman.
app.use(express.json());

app.get('/', async (req, resp) => {
    //Database
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)

})

app.post("/", async(req, resp) => {

    //for postman body
    console.log(req.body)
//insert data in mongodb
let data=await dbConnect();
let result=await data.insertOne(req.body)

    resp.send(result)
})

app.listen(5000);