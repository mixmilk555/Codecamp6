const express = require('express');
const app = express();
const appRoute = require('./appRoute')


app.use('/users', appRoute)
// app.use('/users',(req,res,next)=>{
//     appRoute(req,res)
//     next()
// })

app.use(express.static('./public'))


app.listen(3000, () => console.log('Server start'))