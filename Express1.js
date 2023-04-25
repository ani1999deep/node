var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
   console.log("Data send by browser",req.query)
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening :", host, port)
})