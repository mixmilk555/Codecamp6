const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    let { httpVersion:h, method:m, url:u } = req
    console.log(req.headers.host)
    console.log(h)
    console.log(m)
    console.log(u)
}).listen(8080)