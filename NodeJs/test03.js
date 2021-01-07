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


fs.readFile('./rseadme.txt', function (err, data) {
    if (err) {
        console.log("err")
        return;
    }
    console.log(`${data}`)
    console.log("Reading file");
});

