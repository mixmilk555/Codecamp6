//Promise all
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function pmAll() {
    return new Promise((resolve, reject) => {
        let n = getRndInteger(1, 9)
        if (n < 7) resolve(n)
        reject(n)
    });
}
for (let i = 0; i < 10; i++) {
    const pm1 = pmAll();
    const pm2 = pmAll(); 
    const pm3 = pmAll();


    Promise.all([pm1, pm2, pm3]).then(values => {
        console.log(`${values} success`);
    }).catch(e => console.log(`${e} Don't success`))
}
// เอาไปทำแบบ ฟังชั่นให้ดูง่ายขึ้น
// const pm1 = new Promise((resolve, reject) => {
//     let n = getRndInteger(1, 9)
//     if (n < 7) resolve(n)
//     reject(n)
// });
// const pm2 = new Promise((resolve, reject) => {
//     let n = getRndInteger(1, 9)
//     if (n < 7) resolve(n)
//     reject(n)
// });
// const pm3 = new Promise((resolve, reject) => {
//     let n = getRndInteger(1, 9)
//     if (n < 7) resolve(n)
//     reject(n)
// });


// Promise.all();