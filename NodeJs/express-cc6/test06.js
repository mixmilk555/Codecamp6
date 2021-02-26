const express = require('express')
const appRoute = express.Router()


appRoute.get('/', (req, res) => {
    res.send('Root Page')
})
appRoute.get('/first', (req, res) => {
    res.send('first Page')
})
appRoute.get('/second', (req, res) => {
    res.send('second Page')
})
module.exports = appRoute;

