const Em1 = require('./event1-emit'); //class
const em1 = new Em1(); //instant
const em2 = new Em1();

em1.emit1()
em1.emit2() //ตัวไหนส่งตัวนั้นรับ

em1.on('onesec', function (x) {
    console.log(x);
})
em2.on('twosec', function (x) { //ไม่แสดงผลเพราะ ตัวไหนส่งตัวนั้นรับ  
    console.log('em2 : ' + x);
})

