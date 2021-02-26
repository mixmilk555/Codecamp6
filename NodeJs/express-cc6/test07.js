const express = require('express');
const app = express();
const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./sample.json'));
let users = data.users

//static + redirect

app.use('/pub', express.static('./public'))
// app.use(express.static('./public')) // ข้างบนต้องเพิ่ม /pub เข้าไปถึงจะเข้าถึงได้อันล่างไม่ต้อง แตกต่างไม่มาก

app.get('/', (req, res) => {
    res.redirect('/pub/formGet.html')
})

app.get('/sample', (req, res) => {
    res.redirect('/pub/sample.json')
})

app.get('/search', (req, res) => {
    res.send(users.find(item => item.firstName === req.query.fname))
})




app.listen(8080, () => console.log("Server Start."))