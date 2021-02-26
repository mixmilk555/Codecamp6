const express = require('express');
const app = express();
const fs = require('fs');

let outHtml = fs.readFileSync('./formGet.html')
let data = JSON.parse(fs.readFileSync('./sample.json'))
let user = data.users

app.get('/form', (req, res) => {
    res.send(outHtml)
})

app.get('/search', (req, res) => {
    if (user.find(x => x.firstName === req.query.fname)) {
      return  res.send(user.find(x => x.firstName === req.query.fname))
    }
    res.status(404)
    res.send('NOT FOUND')
})

app.listen(8080, () => console.log('Start server.'))