const express = require('express');
const app = express();
const PORT=8080;
app.get("/", (req, res) => {

    res.send('Hello! I am anideep')
    console.log("Data send by browser",req.query.name)

})

// app.get('/about', (req, res) => {

//     res.send('Hello! This is about page')

// })

// app.get('/help', (req, res) => {

//     res.send('Hello!This is help page')

// })

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
 });