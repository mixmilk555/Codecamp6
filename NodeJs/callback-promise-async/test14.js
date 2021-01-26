const fs = require('fs');

function readMessage() {
    return new Promise((resolve, reject) => {
        fs.readFile('message.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}
function writeMessage(dat) {
    return new Promise((resolve, reject) => {
        fs.writeFile('out.txt', dat, function (err, data) {
            if (err) reject(err)
            else resolve()
        })
    })
}

// readMessage()
//     .then((dat) => writeMessage(dat))  or .then((dat) =>{ return writeMessage(dat)} ) 
//     .then(() => console.log('success'))

readMessage()
    .then(writeMessage)//มีการส่ง parameter มาตัวเดียว รับค่าตัวเดียว ใส่แบบย่อได้เลย
    .then(() => console.log('success'))
    .catch(err => console.log(err))