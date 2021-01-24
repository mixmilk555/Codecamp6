function showText(text, time) {
    return new Promise((rs, rj) => {
        setTimeout(() => {
            console.log(text);
            rs()
        }, time);
    })
}

//แบบ async function
//มีท่าพิเศษ ใส่ () ครอบ async แล้วปิดท้าย (); ไม่ต้องใส่ชื่อ function
(async function () {
    try {
        await showText('1', 1000)
        await showText('2', 1000)
        await showText('3', 1000)
        await showText('4', 1000)
        console.log('Done')
    } catch (err) {
        console.log(err);
    }
})();
// showIt();

// แบบ Promise
// showText('1', 1000)
//     .then(() => showText('2', 1000))
//     .then(() => { return showText('3', 1000) })
//     .then(() => console.log('4'))

