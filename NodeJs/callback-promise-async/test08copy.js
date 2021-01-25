const fs = require('fs');
//producing code
function getFile(filename) {
    return new Promise((resolve, reject) => {
        if (filename == 'start.txt')
            // if (filename.toString() ===  'f02.txt')  เนื้อแท้ readFile() มันเป็น ASCII text จะใช้ === ต้องแปลงเป็น Sting ก่อน
            reject('Error from f02')
        else
            fs.readFile(filename, (err, data) => { resolve(`${data}`); })

    })
}

//consumer code
async function readFile() {
    try {                                           // ทำได้สองแบบ
        let a = await getFile('./start.txt');       //let a = await getFile('./start.txt');  
        a = await getFile(a);                       //let b = await getFile(a);
        a = await getFile(a);                       //let c = await getFile(b);
        a = await getFile(a);                       //let d = await getFile(c);
        console.log(a)
    } catch (err) {
        console.log('error : ' + err);
    }
}
readFile();


// รันfunction แบบ IIFE รันเลยเหมาะสำหรับ async function
// (async () => {
//     try {                                           
//         let a = await getFile('./start.txt');        
//         a = await getFile(a);                       
//         a = await getFile(a);                       
//         a = await getFile(a);                       
//         console.log(`${a}`)
//     } catch (err) {
//         console.log('error : ' + err);
//     }
// })();

        //นำ callback hell test08 มาทำแบบ async/await

