const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')


let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/pub', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect('/pub/formPost.html')
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.send(users.filter(item => item.firstName.includes(req.body.fname)))
})


app.listen(3000, () => { console.log('Server start') })