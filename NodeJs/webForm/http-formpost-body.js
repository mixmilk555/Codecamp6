const http = require('http');
const fs = require('fs');
const formBody = require('body/form')

let postHTML = fs.readFileSync('./formPost.html');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200)
        return res.end(postHTML)
    } else if (req.url === '/getdata') {
        formBody(req, res, function (err, body) {
            if (err) {
                res.statusCode = 500
                return res.end("Error : " + err)
            }
            console.log(body) //เป็น Json Object
            res.writeHead(200)
            res.write(`<p>${body.fname}</p><hr>`)
            res.write(`<p style="color:red">${JSON.stringify(body)}</p><hr>`) 
            res.end(postHTML)
        })
        return;
    }
    res.writeHead(404, 'Not Found', { Error: 'No' });
    res.end('NOT FOUND...')

}).listen(8080, () => console.log('Server start...'));