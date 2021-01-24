const express = require('express');
const fs = require('fs');
const app = express();


let data = JSON.parse(fs.readFileSync('./sample.json'))  //--> JSON.parse ทำ Json string เป็น object ง่ายต่อการดึงข้อมูล
let users = data.users

app.get('/users/:id', (req, res) => {
    res.send('FirstName : ' + users[parseInt(req.params.id) - 1].firstName + '<br> LastName : ' + users[parseInt(req.params.id) - 1].lastName)
})

app.get('/list', (req, res) => {
    res.send(users)
})

app.get('/listname', (req, res) => {
    let outHTML = ''
    users.forEach(x => {
        outHTML += `<li>${x.firstName} ${x.lastName}<br>${x.emailAddress}</li>`
    })
    res.send(`<ol>${outHTML}</ol>`)
})

app.listen(3000, () => console.log('Server start...'))

