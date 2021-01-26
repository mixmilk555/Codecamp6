const Em2 = require('./event1-emit'); //class
const em1 = new Em2(); //instant
const em2 = new Em2();

em1.emit1()
em2.emit2() //ตัวไหนส่งตัวนั้นรับ

em1.on('onesec', function (x) {
    console.log(x);
})
em2.on('twosec', function (x) { //ไม่แสดงผลเพราะ ตัวไหนส่งตัวนั้นรับ  
    console.log('em2 : ' + x);
})

