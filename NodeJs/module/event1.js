const EventEmitter = require('events')  // ใช้ตัวใหญ่เพราะมันเป็น class การตั้งชื่อ class ต้องใช้ตัวใหญ่อยู่แล้ว ห้ามลืม

const em1 = new EventEmitter()  // สร้าง object จาก class ก่อนถึงจะใช้งาน เพราะอย่าลืม class เหมือนพิมพ์เขียวของ object
const em2 = new EventEmitter()

setInterval(() => em1.emit('onesec', { id: 1, txt: 'One Second..' }), 1000)
setInterval(() => em2.emit('twosec'), 2000)

em1.on('onesec', function (x) {
    console.log(`${x.id} : ${x.txt}`)
})

em2.on('twosec', function () {
    console.log(`event em2`)
})





// นำ module เข้ามาผสม
// const EventEmitter = require('events') 
// const mc = require('./myClass');
// const em1 = new EventEmitter()  

// setInterval(() => em1.emit('onesec'), 1000)

// em1.on('onesec', function () {
//     const customer = new mc.Human('JOSKa');
//     console.log(customer.info())
// })