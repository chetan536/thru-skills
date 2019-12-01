const http = require('http');
const url = require('url');


let server = http.createServer(function(req,res) {
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl)

    // console.log(req);
    // console.log(req.headers);
    // console.log(req.url);

    // if(req.url != '/favicon.ico'){
    //     console.log(req);
    // }
    let query = parsedUrl.query;

    if(parsedUrl.pathname == '/'){

        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(`Welcome ${query.name} ${query.lastname}`)

    }else if (parsedUrl.pathname == '/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('About Page')
    }else {
        res.writeHead(404, {'Content-type':'text/html'});
        res.end('Not Found');
    }

});


server.listen(3000, () => {
    console.log('Server up n running on port 3000')
})