const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users;

app.use(bodyParser.urlencoded({ extended: true })) // ด่าน middleware ดัก body จาก post form และทำการแกะ body ก่อนส่งไปใช้งาน

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.redirect('formPost.html')
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.send(users.filter(x => x.firstName.includes(req.body.fname)))
})

app.listen(8080, () => console.log('Server Start'))