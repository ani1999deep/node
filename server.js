const http=require('http');
http.createServer((req,resp)=>{

    resp.write("Hello!I am anideep");
    resp.end();

}).listen(4500);

