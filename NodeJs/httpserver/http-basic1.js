const http = require('http')
const server = http.createServer()  // <-- http.createServer() จะ return object ที่เป็น instant class http.server() ด้วย


server.on('request', (req, res) => {
    console.log('request coming...')
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.write('Hello, world')
    res.end()
})


server.listen(8080)

//  แบบย่อ 
// http.createServer((req, res) => {
//     console.log('request coming...')
//     res.writeHead(200, { 'Content-type': 'text/plain' })
//     res.write('Hello, world')
//     res.end()
// }).listen(8080)


//test
// setInterval(() => server.emit('request'), 2000) 
// ใช้ .on() , .emit() ได้เพราะ class "createServer" สร้าง instat ของ class "http.server" ซึ่ง extend มาจาก 
// "net.server" extent  "EventEmitter"
