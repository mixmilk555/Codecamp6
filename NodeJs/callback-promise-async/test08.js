const fs = require('fs');


function reads(filename) {
    return new Promise((resolve, reject) => {
        if (filename == 'start.txt') {
            reject('Error from f02')
        } else {
            fs.readFile(filename, 'utf-8', (err, data) => {
                resolve(`${data}`);
            })
        }
    })
}

(async function readFile() {
    try {
        let a = await reads('./start.txt')
        a = await reads(a)
        a = await reads(a)
        a = await reads(a)
        console.log(a)
    } catch (err) {
        console.log(err)
    }
})()

// แบบ Promise
// reads('./start.txt')
//     .then((a)=> reads(a))
//     .then((a)=> reads(a))
//     .then((a)=> reads(a))
//     .then((a)=>console.log(a))
//     .catch((err)=>console.log(err))


// Callback Hell
// fs.readFile('start.txt', 'utf-8', (err, data) => {
//     fs.readFile(`${data}`, 'utf-8', (err, data) => {
//         fs.readFile(`${data}`, 'utf-8', (err, data) => {
//             fs.readFile(`${data}`, 'utf-8', (err, data) => {
//                 console.log(data);
//             })
//         })
//     })
// })  