const http=require('http');

function dataControl(req,resp){
    resp.write("<h1></h1>Hello!I am anideep</h1>");
    resp.end();

}

http.createServer(dataControl).listen(4500);

