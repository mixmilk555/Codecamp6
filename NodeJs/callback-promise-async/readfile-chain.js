const fs = require('fs');

const getFile = (filename) => {
    return new Promise((resolve, reject) => {
        if (filename == 'f02.txt') reject('Error form f02')
        fs.readFile(filename, (err, data) => { return resolve(data); })
    })
}

getFile('./start.txt')
    .then((data) => getFile(`${data}`))
    .then((data) => getFile(`${data}`))
    .then((data) => getFile(`${data}`))
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err))

    // นำ callback hell test08 มาทำเป็น Promise