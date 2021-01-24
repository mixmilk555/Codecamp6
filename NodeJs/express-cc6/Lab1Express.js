const express = require('express');
const app = express();

app.get('/bye', (req, res) => {
    res.status(200)
    res.set('content-type','text/html')
    res.send(`<h2><p>Good bye </p></h2>`);
}).listen(5555,()=>console.log('Express start'))