const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/formGet.html'))
    // res.write(fs.readFileSync('./formGet.html'))   ==> ถ้าไม่ใช่ res.write ใช้ res.sendFile 
    // res.end();
})

app.get('/search', (req, res) => {
    // let outData = users.find(item => {
    //    return item.firstName === req.query.fname
    // })
    // res.send(outData.firstName)

    res.send(users.filter(item =>item.firstName.includes(req.query.fname)))
})


app.listen(3000, () => console.log("Server Start.."))