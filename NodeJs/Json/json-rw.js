const fs = require('fs');


let data, jsObj, backJson, user, newData

data = fs.readFileSync('./methodJson.json')
// console.log(`${data}`) //String
// console.log(data) //Object
// console.log(typeof(data))//String เพราะ เรา encodeing มันไว้ utf-8  ถ้าไม่ใส่ มันเป็น object

jsObj = JSON.parse(data);   //string --> object
// console.log(jsObj.users[0])
// for(let k in jsObj)
// console.log(jsObj[k]);

// user = jsObj.users; //เป็น array เพราะ = เป็นทริกการย่อ เวลาเรียกใช้ jsObj.users เป็น user ทำให้ง่ายขึ้นเวลาเรียกใช้
// // .map ของพี่เจียง
// user.map(function (value) {
//     return (value.phoneNumber = value.userId.toString().repeat(4));
// });

// .map คิดเอง
// { user.map(function (value) {
//      return (value.phoneNumber = (1111111 * value.userId));
//  })}
// console.log(user)

backJson = JSON.stringify(jsObj) //object --> string
fs.writeFileSync("./output3.json", backJson)
console.log('Success')
