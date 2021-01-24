const http = require('http');
const fs = require('fs');


let postHTML = fs.readFileSync('./formPost.html');
http.createServer((req, res) => {
    let body = ''
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        body = decodeURI(body)
        console.log(body)
        res.writeHead(200, { "content-type": "text/html" }) //{"content-type": "text/html"} ไม่ใส่ก็ได้ เพราะแยกไฟล์ html ไว้อีกไฟล์ไม่ต้องเขียน เขียนเฉพาะเราใช้ html ใน method เท่านั้น
        res.write(`<h2>ข้อมูล Body : ${body}</h2><hr>`)
        res.end(postHTML)
    })
}).listen(8080, () => console.log('Server start..'))