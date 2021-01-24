const fs = require('fs');


let data, jsObj, backJson, user, newData

data = fs.readFileSync('./output.json')
jsObj = JSON.parse(data);   //string --> object

user = jsObj.users;

// user.map(function (value) {
//     return (value.phoneNumber = value.userId.toString().repeat(4));
// });
user.filter(function (value) {
    if (value.lastName === 'mac') value.lastName = 'apple';
    
    value.lastName = value.lastName;

})

backJson = JSON.stringify(jsObj) //object --> string
fs.writeFileSync("./output2.json", backJson)
console.log('Success')