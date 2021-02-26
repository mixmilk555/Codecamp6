// setTimeout(function setTime() { console.log('A'); }, 1000)
// setTimeout(() => { console.log('A') }, 1000)
// setTimeout(() => { return console.log('A'); }, 1000)
// setTimeout(() => { return (console.log('A')); }, 1000)
// setTimeout(setTime = () => {  console.log('A'); console.log('B'); console.log('C') }, 1000)

// setTimeout(() => console.log('A'), 1000)
// setTimeout(() => console.log('B'), 200)
// setTimeout(() => console.log('C'), 300)


let a = true;
function setTime(text, delay) {
    return new Promise((resolve, reject) => {
        if (a == true) {
            return setTimeout(() => { console.log(text); resolve(); }, delay)
        }
        reject()

    })
}

// async function Time() {
//     try {
//         await setTime("Hello", 1000)
//         await setTime("Hello1", 500)
//         await setTime("Hello2", 600)
//     } catch (err) {
//         console.log("Error " + err)
//     }
// }

// Time()

//แบบ promise 
setTime("Holo", 1000)
    .then(() => { return setTime("Holo1", 1000) })
    .then(() => setTime("Holo2", 800))
    .catch(()=>console.log("error"))