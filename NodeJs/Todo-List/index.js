const express = require('express');  //สร้าง ตัวแปร express เป็น instance ดึง library Express
const app = express();
const cors = require('cors');
const todoListRoute = require('./routes/todoList');
const bodyParser = require('body-parser')
const http = require('http')
const fs = require('fs')
const url = require('url');
const todoList = require('./controllers/todoList')


// cors จะไปยกเลิกการ block ระหว่าง frontend -backend ทำให้เชื่อมถึงกันได้
app.use(cors());

//app.use(bodyParser.urlencoded({extended : true})) // ดึง body-parser มาช่วยแกะ body (กรณีนี้เป็นแบบ Url)
app.use(express.json()) // ดักจับ body json แปลงเป็น object json ให้เราใช้งาน
app.use(express.urlencoded({ extended: false }));  // เหมือนกันใน express มีมาให้เลยแปลงข้อมูล body จาก form เป็นรูปแบบ json object

//แบบย่อ 
// todoListRoute = express.Router((req, res, next) => {  --->return มาเก็บไว้ใน  todoListRoute
//     todoListRoute(req, res)
//     next();
// })                                     เลยเขียนแบบย่อได้
// app.use('/todo-list',todoListRoute) -->todoListRoute เป็น middleware function  ที่ return มาจาก express.Router();
app.use('/todo-list', (req, res, next) => {
    todoListRoute(req, res)
    next();
})

app.listen(3000, () => console.log("Server start.."))




// http.createServer((req, res) => {
//     let p_url = url.parse(req.url, true)
//     if (req.url == '/todo-list') {
//         res.writeHead(200)
//         res.write(fs.readFileSync('./formGet.html'))
//         return res.end();
//     } else if (p_url.pathname == '/aaa') {
//        return  todoListRoute.get((req, res))
//     }
//     res.writeHead(404, 'Not Found')
//     res.end("not FOUND 404")
// }).listen(3000, () => console.log('Server start...'))

