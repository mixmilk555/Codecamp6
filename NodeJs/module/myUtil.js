let pi = 3.14
const user = { name: 'John', age: 30 }

module.exports = function (min = 0, max = 9) { // default value ถ้าไม่ใส่อะไรมา มันนำค่ามา default ใช้งานแทน
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports.circleArea = (r = 1) => pi * r ** 2;
module.exports.user = user;
