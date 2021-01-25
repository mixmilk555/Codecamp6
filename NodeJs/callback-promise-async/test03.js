const fs = require('fs');

//Arrow function
// fs.readFile('./readme.txt',(err,data) => {console.log(`${data}`)});
// console.log("Reading file"); 

//Arrow function
// fs.readFile('./readme.txt', (err, data) => {
//     if (err) { return console.log("err") }
//     console.log(`${data}`)
//     console.log("Reading file");
// });


fs.readFile('./readme.txt', function (err, data) {  // 'utf-8' ใส่หลัง readme.txt มันจะแปลง code ให้
    if (err) {
        console.log("err")
        return;
    }
    console.log(`${data}`)
    console.log("Reading file");
});

