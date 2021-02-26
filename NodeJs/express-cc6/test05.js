const express = require('express');
const app = express();
const appRoute = require('./test06')

app.use('/list', appRoute)

app.listen(8080, () => console.log('Server Start'))