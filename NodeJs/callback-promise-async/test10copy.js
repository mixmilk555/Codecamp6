let done = false;


const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = "Here is the thing I built";
        resolve(workDone);
    } else {
        const why = "Still working on something else";
        reject(why);
    }
})

const checkIfItsDone = () => {
    isItDoneYet
        .then(console.log) // (ok) => console.log(ok) มีการส่ง parameter มาตัวเดียว รับค่าตัวเดียว ใส่แบบย่อได้เลย
        .catch(console.error)// (err) => console.log(err)
}
checkIfItsDone();

//เขียนแบบย่อ
// new Promise((resolve, reject) => {
//     if (done) {
//         const workDone = "Here is the thing I built";
//         resolve(workDone);
//     } else {
//         const why = "Still working on something else";
//         reject(why);
//     }
// }).then(console.log).catch(console.error)
