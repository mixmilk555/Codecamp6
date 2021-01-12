// console.log('1')
// setTimeout(() => { console.log('2') }, 2000);
// console.log('3')


const pm = new Promise((resolve, rj) => {
    setTimeout(() => {
        console.log('2')
        resolve()  //หลังจากที่มันคำสั่งทุกอย่างเรียบร้อย แล้วเกิดสถานะ resolve ถึงจะไปทำคำสั่งหลัง .then() อีกที
    }, 1000)

})


console.log('1')
pm.then(() => { console.log('3') }); //คำสั่งหลัง .then จะทำต่อเมื่อคำสั่งหลักเสร็จแล้วมีการส่ง resolve เท่านั้น   
//เรียกใช้แบบ 1 เพราะ pm เป็น object instant ของ Class Promise  จะคล้ายกับ console.log ที่ เรียกใช้ได้เลย

//เรียกแบบ 2 สร้าง consumer function ปกติ
// const pm2 = () => {
//     pm
//         .then(() => { console.log('3') })
// }
// pm2()
