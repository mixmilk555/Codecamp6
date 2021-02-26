const db = require('./models/index') // const db = require('./models) //เขียนแบบนี้ได้มันไปหา index ให้เองอัตโนมัติ 
const express = require('express')
const app = express();
const cors = require('cors')
const managerRoutes = require('./routes/Manager')
const accountRoutes = require('./routes/Account')
const branchRoutes = require('./routes/Branch')
const customerRoutes = require('./routes/Customer')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/managers', managerRoutes)
app.use('/branches', branchRoutes)
app.use('/accounts', accountRoutes)
app.use('/customers', customerRoutes)

db.sequelize.sync().then(() => {
    app.listen(8080, () => console.log("Server start"))
});






// การเขียน แบบ async
// (async () => {
//     try {
//         await db.sequelize.sync({ force: true })
//         console.log("Database is sync")
//     } catch (err) {
//         console.log("Error" + err)
//     }
// })()

// const createDb = async () => {
//     try {
//         await db.sequelize.sync({ force: true })
//         console.log("Database is sync")
//     } catch (err) {
//         console.log("Error" + err)
//     }
// }
// createDb()

// async function createDb() {
//     try {
//         await db.sequelize.sync({ force: true })
//         console.log("Database is sync")
//     } catch (err) {
//         console.log("Error" + err)
//     }
// }
// createDb()