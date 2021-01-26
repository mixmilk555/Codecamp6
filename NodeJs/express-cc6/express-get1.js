const express = require('express');
const fs = require('fs');
const app = express();  // instance ของตัว express
const path = require('path')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listcounter = 0

app.use('/list', (req, res, next) => {
    listcounter++
    console.log('Request to /list number :' + listcounter)
    next()
})

app.get('/list', (req, res) => {
    res.send(users)
})


app.get('/formSearch', (req, res) => {
    res.sendFile(path.join(__dirname + '/formGet.html'))
})

app.get('/search', (req, res) => {
    res.send(users.find((x) => { return x.firstName === req.query.fname; }))
})

app.get('/users/:id', (req, res) => {
    res.send(`<h2>FirstName : ${users[Number(req.params.id) - 1].firstName} <br> LastName : ${users[Number(req.params.id) - 1].lastName}</h2>`)
})

app.get('/username/:uname', (req, res) => {
    let result = users.find((x) => {
        return x.firstName === req.params.uname;
    })
    res.send(result)
}
)



app.get('/listname', (req, res) => {
    let showHtml = ''
    users.forEach(item => {
        showHtml = showHtml + `<li> <b>ชื่อ :</b> ${item.firstName}<br> </li>`
    });
    // let a = function a(users) {
    //     let b =''
    //     for (let k in users) {
    //          b += `<li>${users[k].firstName}</li>`
    //     }
    //     return b;
    // }
    // res.send(`<ol>${a(users)}</ol>`)
    res.send(`<ol>${showHtml}</ol>`)
})

app.listen(3000, () => { console.log('Server start...') }) 