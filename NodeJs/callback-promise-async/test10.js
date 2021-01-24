let done = false;

// isItDoneYet เป็นตัวแทนของ Promise 
// ตัวสร้าง  = "producing code" เป็นตัว object promise ว่าจะส่ง resolve และ reject เมื่อไหร่
const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built';
        resolve(workDone);
    } else {
        const why = "Still working on something else";
        reject(why);
    }
})

//ตัวเรียกใช้ = "consuming code"
const checkIfItsDone = () => {
    isItDoneYet     // isItDoneYet เป็นตัวแทนของ Promise  isItDoneYet.then() , เหมือนกับ console .log()
        .then((ok) => {
            console.log('come from resolve state in Promise');
            console.log(ok)
        })
        .catch(err => {
            console.log('come from reject state in Promise');
            console.error(err);
        })
}
checkIfItsDone();