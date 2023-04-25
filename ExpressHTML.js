const express = require('express');
const app = express();
const PORT=8080;
app.get("/", (req, res) => {

    res.send(
        `
        <h1>Hello! I am anideep</h1><a href="/about">Go the about page</a>
       
        `
        )
    console.log("Data send by browser")

})

app.get("/about", (req, res) => {

    res.send(`<input type="text" placeholder="Enter name" ${req.query.name}/>
    <button>Click Here</button>
    <a href="/">Go the Home
    
    
    
    page</a>`)
    console.log("Data send by browser")

})


app.get("/help",(req,res)=>{

    res.send([{
        name:"Anideep",
        email:"anideep@gmail.com"
    },
    {
        name:"Ani",
        email:"anip@gmail.com"
    },
    {
        name:"Deep",
        email:"deep@gmail.com"
    },
    {
        name:"Esolz",
        email:"esolz@gmail.com"
    }])
})
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log(`Server listening on PORT-${PORT}`, PORT);
 });