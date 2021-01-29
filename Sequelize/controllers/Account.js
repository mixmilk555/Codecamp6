const db = require('../models');

//แบบเป็นตัวใช้ตรงที่ ตัวใช้รับเองใช้เองไม่ส่งต่อ ให้ promise function

const getAllAccount = async (req, res) => {
    const allAccount = await db.Account.findAll();
    res.status(200).send(allAccount)
}

module.exports = { getAllAccount }



// แบบ Promise 
// function getAllAccount(req, res) {
//     return new Promise((resolve, reject) => {
//         if (done) {
//             let a = db.Account.findAll()
//             resolve(a)
//         } else {
//             reject();
//         }
//     })
//     .then((a) => {
//         res.status(200).send(a)
//     }).catch(()=>{
//         res.status(404).send("NOT FOUND")
//     })
// }
// module.exports = {
//     getAllAccount
// }


// แบบ async แบบเป็นตัวเรียกใช้ คือไปรับ req,res มาส่งให้ promise function จะต่างกับ
// แบบเป็นตัวใช้ตรงที่ ตัวใช้รับเองใช้เองไม่ส่งต่อ ให้ promise function
// function getAllAccount(req, res) {
//     return new Promise((resolve, reject) => {
//         if (done) {
//             let a = db.Account.findAll()
//             resolve(a)
//         } else {
//             reject();
//         }
//     })}
//
// async function checkIt(req,res) {
//     try {
//         let a = await getAllAccount(req,res);
//         res.status(200).send(a)
//     } catch (err) {
//         console.log(err)
//     }
// };
// checkIt();
// module.exports = {
//     checkIt
// }
