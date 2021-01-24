const mc = require('./myClass');
const mu = require('./myUtil');

const customer = new mc.Human('JOSKa');
console.log(customer.info())

const employee = new mc.Human('KKOS', mu.getRandom(60,90));
console.log(employee.info()) 