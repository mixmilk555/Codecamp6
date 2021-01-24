// // console.log('1')
// // setTimeout(() => { console.log('2') }, 2000);
// // console.log('3')


// const pm = new Promise((resolve, rj) => {
//     setTimeout(() => {
//         console.log('2')
//         resolve()  //หลังจากที่มันคำสั่งทุกอย่างเรียบร้อย แล้วเกิดสถานะ resolve ถึงจะไปทำคำสั่งหลัง .then() อีกที (เกิดการส่ง resolve)
//     }, 1000)
//})

// //เรียกใช้แบบ 1 เพราะ pm เป็น object instant ของ Class Promise  จะคล้ายกับ console.log ที่ เรียกใช้ได้เลย
// console.log('1') 
// pm.then(() => { console.log('3') }); //คำสั่งหลัง .then จะทำต่อเมื่อคำสั่งหลักเสร็จแล้วมีการส่ง resolve เท่านั้น   

// //เรียกแบบ 2 สร้าง consumer function ปกติ
// // const pm2 = () => {
// //     pm.then(() => { console.log('3') })
// // }
// // pm2()



//code แบบย่อ ของ promise ศึกษาไว้
// console.log('1')
// const pm = new Promise((resolve, rj) => {  // มีหรือไม่มี const pm ก็ได้
//     setTimeout(() => {
//         console.log('2')
//         resolve()
//     }, 1000)
// }).then(() => { console.log('3') }).then(() => { console.log('End') })


// หลัง .then() ทำใครทำมันไม่ได้เรียงในกรณีเราใช้ setTimeout  End ออก ก่อน 3 เพราะเป็น asynchrous
//  ถ้าอยากให้ end ออกหลัง 3 ให้ .then()อยู่ในวงเว็ปของ .then() อีกอันที่มี promise ห้ามอยู่ข้างนอกเพราะมันจะทำงานแบบ asynchronous คือ จะทำงานไม่รอ เพราะ Promise ควบคุมการทำงานของ .then()
// console.log('1')
// new Promise((resolve, rj) => {
//     setTimeout(() => { console.log('2'); resolve(); }, 1000)
// })
//     .then(() => {
//         new Promise(resolve => {
//             setTimeout(() => { console.log('3'); resolve(); }, 500)
//         }).then(() => {
//             setTimeout(() => { console.log('end') }, 400)
//         })
//     })