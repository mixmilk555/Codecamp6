function showText(text, time) {
    return new Promise((rs, rj) => {
        setTimeout(() => {
            console.log(text);
            rs()
        }, time);
    })
}

showText('1', 1000)
    .then(() => showText('2', 1000))  //ลบ {},return ออกมีคำสั่งเดียวแล้วเป็นคำสั่งreturลบได้เลยความรู้เก่า 
    .then(() => { return showText('3', 1000) }) //**ปีกกา และ return ควรใส่พร้อมกันจะดีสุด กรณีนี้ใส่แค่ปีกกาไม่ใส่ return เกิดปัญหาคือจะทำงานแบบ asynchronous เนื่องจาก .then() ไม่เจอ Promise จาก return showText()**
    .then(() => console.log('4'))
    //ถ้าเป็น promise มาจาก function .then จะเรียงลำดับให้เองต้องใส่ return ไม่งั้นจะไม่เรียงลำดับ
    //เพราะ return showText จะเหมือนกัน return function showText มาแสดงทั้งก้อนซึ่งใน function นั้นมีการ return Promise 
    //พอ .then() อันต่อไปมาเจอ Promise ที่ถูก return มาจาก then ก่อนหน้ามันก็จะเกิดการเรียงลำดับ Promise ตามปกติ
    //ถ้าไม่ใส่ return มันจะไม่เจอ Promise จาก showText() ทำให้การทำงานจะเป็น asynchronous คือทำได้ทำไปเลยไม่รอคำสั่งให้เสร็จเป็นลำดับ
    //Promise ไว้ควบคุมการทำงาน .then() ให้ทำงานเมื่อมีการส่ง resolve()


//แบบไม่ใส่ return Promise ทำให้ต้องนำ .then อีกตัวไปไว้ใน .then() อีกตัวที่มี promiseจึงจะทำงานแบบ synchronous
// showText('1', 1000)
//     .then(() => {
//         showText('2', 1000)
//      .then(() => { showText('3', 1000).then(() => { showText('4', 500) }) })
//     })

