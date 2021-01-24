const EventEmitter = require('events');

class Em1 extends EventEmitter {
    emit1() {
        setInterval(() => this.emit('onesec', 1111), 1000)
    }
    emit2() {
        setInterval(() => this.emit('twosec', 2222), 1000)
    }
}

module.exports = Em1
// module.exports.Em1 = Em1;
// วิธีนี้ต่างตรงที่ ตอนไปเรียกใช้อีกไฟล์ ต้อง .ตรง newclass  
// const Eon = require('./event1-emit');
// const e2 = new Eon.Em1();  <--- ถ้าไม่ . มันจะไม่อ้างถึง ดูความแตกต่างด้วย