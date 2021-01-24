const http = require('http')
const fn = require('./function');


http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    if (req.url == '/') {
        res.write(`<h2>This url is HomePage</h2>`)
        for (let i = 1; i <= 6; i++) {
            res.write(`<h${i}>ยินดีต้อนรับ</h${i}>`)
        }
        return res.end()
    }
    else if (req.url == '/user') {
        res.write(`<h2>This url is UserPage</h2>`)
        return res.end()
    } else if (req.url == '/form') {
        return fn.form(req, res)
    }
    else {
        res.writeHead(404, "Not found....", { 'content-type': 'text/html' })
        res.end("<hr><h3>Not Found</h3><hr>")
    }

}).listen(8080, () => console.log('Server start..'))



// เขียนแบบ response.setHeader()
// res.statusCode = 200
// res.setHeader('content-type', 'text/html')
// res.statusCode = 404
// res.statusMessage = 'Not Found in our data'
// res.setHeader('content-type', 'text/html')
// res.write(`<hr><h3>${res.statusMessage}</h3><hr>`)