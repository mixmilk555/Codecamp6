const express = require('express');
const appRoute = express.Router();

appRoute.get('/', (req, res) => {
    res.send('Root page')
})
appRoute.get('/first', (req, res) => {
    res.send('First page')
})

appRoute.get('/second', (req, res) => { 
    res.send('Second page')
})



module.exports = appRoute