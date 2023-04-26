const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public')
// console.log(publicPath)
// app.use(express.static(publicPath))
app.get('', (_, resp) => {

    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, resp) => {

    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/home', (_, resp) => {

    resp.sendFile(`${publicPath}/home.html`)
})
app.listen(5000, () => console.log("port is open in 5000"));