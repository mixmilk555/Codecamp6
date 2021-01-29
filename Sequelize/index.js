const db = require('./models/index'); //-->import ไปที่ index.js จาก folder models เพราะมันทำหน้าที่รวม models ที่เราเขียนมาทั้งหมด ไว้ให้อยู่ในรูป Object เราสามารถดึงมาใช้ได้เลย
const express = require('express');
const app = express();
const cors = require('cors');
const managerRoutes = require('./routes/Manager')
const branchRoutes = require('./routes/Branch')
const accountRoutes = require('./routes/Account')
const customerRoutes = require('./routes/Customer')

app.use(cors());
app.use(express.json()); //รับข้อมูล body มาเป็น json string แปลง เป็น json object เพื่อใช้งาน 
app.use(express.urlencoded({ extended: false }));

app.use('/managers',managerRoutes)
app.use('/branches',branchRoutes)
app.use('/accounts',accountRoutes)
app.use('/customers',customerRoutes)


//แบบ promise .then()
db.sequelize.sync().then(() => {
    //sync() มีหน้าที่เช็คว่า มีตารางนั้นอยู่รึเปล่า 'ถ้ามีให้เชื่อมต่อ' 'ถ้าไม่มีให้สร้าง' 
    // มัน return เป็น promise ถ้าลืมใช้ .then() มา หรือจะ async ก็ได้
    //{ force: true } ใส่ใน sync()= ทุกครั้งที่มีการรัน สร้าง model ใหม่ให้ DROP ตารางเก่าทิ้งแล้วสร้างตารางใหม่
    app.listen(8000, () => console.log('Server start..port 8000'))
})


// แบบ async/await
// (async () => {
//     try {
//         await db.sequelize.sync()
//         console.log("Database is Sync with async")
//     } catch (err) {
//         console.log(err)
//     }
// }
// )()