const express = require('express');
const app = express();
const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./sample.json'))
let user = data.users;


app.get('/user/:id', (req, res) => {
    res.send(user[+req.params.id - 1])
})

app.get('/list', (req, res) => {
    res.send(user)
})

app.get('/listName', (req, res) => {
    let a = ''
    user.forEach(item => {
        a += `<li>${item.firstName} ${item.lastName}</li>`
    })
    res.send(`<ol>${a}</ol>`);
})

app.listen(8080, () => console.log('Server Start..'))