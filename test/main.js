// import * as Say from "./sayHi.js";
import sayGuy from './exportDefault.js' // default ไม่ต้องใส่ { }
import { sayHi } from './sayHi.js'  // แบบปกติไม่ใช่ default ใส่ { }

console.log(sayHi("ASSS"));
// console.log(Say.j('JOKE'));
console.log(sayGuy("sfsf"));