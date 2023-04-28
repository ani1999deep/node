const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();
// app.use(reqFilter)
route.use(reqFilter);
app.get('/', (req, resp) => {
    resp.send('Welcome to Home page')
})

//Route apply only this page
app.get('/users', reqFilter, (req, resp) => {
    resp.send('Welcome to Users page')
})

route.get('/about', (req, resp) => {
    resp.send('Welcome to About page')
})

route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact page')
})


app.use('/', route)
app.listen(5000)