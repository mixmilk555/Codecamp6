const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

//static + redirect

let formGet = fs.readFileSync('./formGet.html')

// วิธีนำไฟล์ html มาแสดง 3วิธี
//1 ใช้ readFileSync
app.get('/form', (req, res) => {
    res.send(formGet);
    // res.send(fs.readFileSync('./formGet.html'))
})

//2 ใช้ sendFile + path
app.get('/form1',(req,res)=>{
    res.sendFile(path.join(__dirname + '/formGet.html'))
})
//3 ไปดูที่ httserver  http-staticweb.js , getdata.js
  
//4. ใช้วิธี redirect + express.static
app.use('/pub', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect('/pub/formGet.html')
})

app.listen(8080, () => console.log("Server Start."))