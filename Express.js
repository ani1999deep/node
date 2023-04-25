const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.send('Hello! I am anideep')

})

app.get('/about', (req, res) => {

    res.send('Hello! I am anideep')

})

app.get('/help', (req, res) => {

    res.send('Hello! I am anideep')

})

app.listen(4000);