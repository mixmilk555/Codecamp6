const express = require('express');
const app = express();

app.get('/bye', (req, res) => {
    res.status(200)   //http  res.statuscode = 200
    res.set('content-type','text/html')  // res.setHeader('content-type','text/html')
    res.send(`<h2><p>Good bye </p></h2>`);//res.write(`<h2><p>Good bye </p></h2>`) res.end(); http networkต้องมี end เสมอ
}).listen(5555,()=>console.log('Express start'))