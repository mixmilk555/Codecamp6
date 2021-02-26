const express = require('express');
const app = express();
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listcounter = 0

app.use('/list', (req, res, next) => {
    listcounter++
    console.log(listcounter)
    next()
})

app.get('/list', (req, res) => {
    let a = ''
    users.forEach(item => {
        a += `<li>${item.firstName} ${item.lastName}</li>`
    })
    res.send(`<ol>${a}</ol>`)
})

app.listen(8080, () => console.log('Server Start..'))