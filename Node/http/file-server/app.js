const http = require('http');
const url = require('url');
const fs = require('fs');




const server = http.createServer();

server.on('request', function(req,res){

    let parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname == '/'){
        res.end('welcome to my app ')
     
    }else if(parsedUrl.pathname == '/contact'){
        res.end('contact us')
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('not found')
    }
})


server.listne(3002,() => console.log('server running on port 3002'))