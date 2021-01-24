const http = require('http');


http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html', 'Codecamp' : 'five' });
    res.write('<h2> This is response </h2>');
    res.end();
}).listen(8080,()=> console.log('Server start...')) 