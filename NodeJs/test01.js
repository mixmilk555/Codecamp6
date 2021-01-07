const os = require('os');

const tmem = os.totalmem();
const fmem = os.freemem();
const mem = tmem - fmem;
console.log(`total mem = ${tmem} and free mem = ${fmem}`);
console.log(` usage = ${mem}`);
console.log(os.hostname());