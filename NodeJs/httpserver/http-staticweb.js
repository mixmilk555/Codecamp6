const http = require('http');
const fs = require('fs');
const url = require('url');
const gt = require('./getdata')
const server = http.createServer();

function getUrl(fileName, req, res) {
    fs.readFile(fileName, (err, data) => {
        res.write(data);
        res.end();
    })
}


//ใช้แบบ ให้ server เป็น instant ของ http.server() extends net.server(listen) extend EventSubmitter(on)
server.on('request', (req, res) => {
    let p_url = url.parse(req.url, true)
    res.writeHeader(200, { "content-type": "text/html;charset=utf8" });
    if (req.url === '/') {
        return getUrl('./index.html', req, res)

    } else if (req.url === '/formGet') {
        return getUrl('./formGet.html', req, res)

    } else if (p_url.pathname === '/getdata') {    //p_url.pathname === './getdata'
        return gt.getdata(req, res)

    } else {
        res.writeHeader(404, 'Not found', { "content-type": "text/html", "404": "Not Found" })
        res.end('Not found ...')
    }

}).listen(8080, () => { console.log('Server start..') })