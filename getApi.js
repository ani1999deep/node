const express = require('express');
const dbConnect = require('./mongoDatabase');
const app = express();

app.get('/', async (req, resp) => {
    //Database
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)

})

app.listen(5000)