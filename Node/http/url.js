const url = require('url');


let parsedUrl = url.parse('http://localhost:3000/?name=ashu&lastname=mishra',true);

console.log(parsedUrl);