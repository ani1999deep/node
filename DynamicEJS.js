const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public')

// View engine setup
app.set('view engine', 'ejs');
app.get('', (_, resp) => {

    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, resp) => {

    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/home', (_, resp) => {

    resp.sendFile(`${publicPath}/home.html`)
})

app.get('/profile', (_, resp) => {
    const user={
        name:'Ani',
        email:'ani@gmail.com',
        city:'kolkata',
        skills:['php','js','c++']
    }

 // Rendering home.ejs page
 resp.render('profile',{
    user: user
});
})


app.get('/login',(_,resp)=>{

    resp.render('login')
})

app.get('*', (_, resp) => {

    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000, () => console.log("port is open in 5000"));