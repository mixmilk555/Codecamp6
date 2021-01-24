const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello form Express")
})

app.get('/user', (req, res) => {
    res.send("Hello form User")
})

app.listen(3000, () => console.log('Express server start..3000'))

 
//-------------เปรียบเทียบกับแบบเก่า-------------------//

const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    res.statusCode = 200; 
    res.statusMessage = 'OK guy'
    res.setHeader("content-type", "text/html")

    if (req.url === '/') {
        res.end('Hello form http')
    } else if (req.url === '/user') {
        res.end('Hello form user')
    }
}).listen(8080, () => console.log('Server start.'))