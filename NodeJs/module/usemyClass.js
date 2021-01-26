const mc = require('./myClass');
const mu = require('./myUtil');

const customer = new mc.Humans('JOSKa');
console.log(customer.info())

const employee = new mc.Humans('KKOS', mu(60,90));
console.log(employee.info()) 