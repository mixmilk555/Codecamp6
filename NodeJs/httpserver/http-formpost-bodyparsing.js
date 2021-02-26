const http = require('http');
const fs = require('fs');
const formBody = require('body/form');

let postHTML = fs.readFileSync('./formPost.html');
http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.statusMessage = "OK"
        res.setHeader('content-type', 'text/html')
        res.end(postHTML)
    } else if (req.url === '/getdata') {
        formBody(req, res, function (err, body) {
            if (err) {
                res.statusCode = 500
                return res.end("Error" + err)
            }
            res.writeHead(201, { 'content-type': 'text/html' })
            res.write(`<p><b>Name</b> : ${body.fname} <b>LastName</b> : ${body.lname}</p><hr>`)
            res.write(`<p>${JSON.stringify(body)}</p><hr>`)
            res.end(postHTML)
        })
    }else{
        res.writeHead(404,"NOT FOUND")
        res.end("NOT FOUND")
    }

}).listen(8080, () => console.log('Server start..'))