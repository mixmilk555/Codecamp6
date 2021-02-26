const http = require('http')
// const server = http.createServer();

function app(req, res) {
    console.log('request coming...')
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.write('Hello, world')
    res.end()
}

//1.
// server.on('request',(req,res)=>{
//     app(req,res);
// }).listen(8080);

//2. .on() เป็น default method ใน http.createServer()
// http.createServer((req, res)=>{
//     app(req,res)
// }  
// ).listen(8080) 

//3.
//  const server = http.createServer(app)
//  server.listen(8080)

//4.
http.createServer(app).listen(8080)

// http.createServer(return object server ออกไป) = return object "server"  --> instant class httpserver extends net.server extends EventEmitter




